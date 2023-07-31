import { Injectable } from "@angular/core"
import { RestApi, Jogo, ApiService, Jogador } from "commons"
import { JogadorService } from "./jogador.service"
import { cache } from "commons/cache"

@Injectable({providedIn: 'root'})
export class JogoService implements ApiService<Jogo> {
   constructor(private jogadorApi: JogadorService) { }
   
   public static get cached(){ return cache('jogo') }
   
   public async search() { 
      const jogo = await RestApi.get<Jogo>('/jogo')
      return this.update(jogo)
   }

   public async update(jogo: Jogo) {
      const jogadores = await RestApi.get<Jogador[]>('/jogadores')
      
      jogo.jogadores = jogadores.sort(classificacao)
      jogo.jogadores.forEach((x, i) => x.ranking = i+1)

      return cache('jogo', jogo)
   }    

   public create = (jogo: Jogo) => Promise.reject('Not implemented') 
   public delete = () => Promise.reject('Not implemented') 
}

function classificacao(a: Jogador, b: Jogador) {   
   const [x,y] = [a.pontuacao, b.pontuacao]
   const [i,j] = [a.nome.charCodeAt(0), b.nome.charCodeAt(0)]
   const [m,n] = [a.nome.length, b.nome.length]
   const [A,B] = x != y ? [x,y] : i != j ? [i,j] : [m,n]

   return A > B ? -1 : A < B ? +1 : 0
}
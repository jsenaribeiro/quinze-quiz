import { Injectable } from "@angular/core"
import { RestApi, Jogo, ApiService, Classificacao } from "commons"
import { JogadorService } from "./jogador.service"
import { cache } from "commons/cache"

@Injectable({providedIn: 'root'})
export class JogoService implements ApiService<Jogo> {
   constructor(private jogadorApi: JogadorService) { }
   
   public static get cached(){ return cache('jogo') }
   
   public async search() { 
      const jogo = await RestApi.get<Jogo>('/jogo')
      const jogadores = await this.jogadorApi.search()
      const classificando = x => ({ usuario: x.nome, pontos: x.pontuacao })

      jogo.classificacao = jogadores
         .map(classificando)
         .sort(classificacao)
         
      return cache('jogo', jogo)
   }
   public create = (jogo: Jogo) => Promise.reject('Not implemented') 

   public update = (jogo: Jogo) => Promise.reject('Not implemented') 
   
   public delete = () => Promise.reject('Not implemented') 
}

function classificacao(a: Classificacao, b: Classificacao) {   
   const [x,y] = [a.pontos, b.pontos]
   const [i,j] = [a.usuario.charCodeAt(0), b.usuario.charCodeAt(0)]
   const [m,n] = [a.usuario.length, b.usuario.length]
   const [A,B] = x != y ? [x,y] : i != j ? [i,j] : [m,n]

   return A > B ? -1 : A < B ? +1 : 0
}
import { Injectable } from "@angular/core"
import { RestApi, Jogo, ApiService, Rank, Jogador } from "commons"
import { JogadorService } from "./jogador.service"
import { NowService } from "./now.service"
import { cache } from "commons/cache"

@Injectable({providedIn: 'root'})
export class JogoService implements ApiService<Jogo> {
   constructor(private jogadorApi: JogadorService, private now: NowService) { }
   
   public static get cached(){ return cache('jogo') }
   
   public async search(): Promise<Jogo> {
      const jogo = await RestApi.get<Jogo>('/jogo')
      jogo.ranking = await this.loadRanking()

      return cache('jogo', jogo) 
   }

   public create = (jogo: Jogo) => Promise.reject('Not implemented') 

   public update()
   public update(jogo: Jogo)
   public async update(jogo?: Jogo) {
      const jogoAtual = jogo || this.now.jogo || await this.search()
      jogoAtual.ranking = await this.loadRanking()
      return jogoAtual
   }
   
   public delete = () => Promise.reject('Not implemented') 

   private async loadRanking() {
      const jogadores =  await this.jogadorApi.search()
      
      const classificando = x => ({ usuario: x.nome, pontos: x.pontuacao })

      const classificacao = (a: Rank, b: Rank) => {   
         const [x,y] = [a.pontos, b.pontos]
         const [i,j] = [a.usuario.charCodeAt(0), b.usuario.charCodeAt(0)]
         const [m,n] = [a.usuario.length, b.usuario.length]
         const [A,B] = x != y ? [x,y] : i != j ? [i,j] : [m,n]
      
         return A > B ? -1 : A < B ? +1 : 0
      }

      return jogadores.map(classificando).sort(classificacao)
   }
}
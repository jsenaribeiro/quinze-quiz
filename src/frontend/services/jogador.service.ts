import { Injectable } from "@angular/core"
import { RestApi } from "commons/restApi"
import { Jogador,  ApiService, throws } from "commons"
import { cache } from "commons/cache"
import { CacheService } from "./cache.service"
import { JogoService } from "./jogo.service"

@Injectable({ providedIn: 'root' })
export class JogadorService implements ApiService<Jogador> {
   constructor(private jogoService:  JogoService) {}

   public static get cached() { return cache('jogador') }

   public search(): Promise<Jogador[]>
   public search(nome: string): Promise<Jogador>
   public async search(nome: string | undefined = undefined): Promise<Jogador | Jogador[]> {
      const jogo = await this.jogoService.search()
      const user = jogo?.jogadores?.find(x => x.nome == nome)

      if (nome) cache('jogador', user)

      return ! nome ? jogo.jogadores : user
          || throws<Jogador>('Jogador nao encontrado')
   }

   public create = (jogador: Jogador) => RestApi.post(`/jogadores`, jogador, true) 

   public async update(jogador: Jogador) {      
      await RestApi.put(`/jogadores`, jogador, true)
      await this.jogoService.search()      
      await this.search(jogador.nome)
   }

   public delete = () => Promise.reject('Not implemented') 
}
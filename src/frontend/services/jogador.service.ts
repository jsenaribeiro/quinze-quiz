import { Injectable } from "@angular/core"
import { RestApi } from "commons/restApi"
import { Jogador,  ApiService } from "commons"
import { cache } from "commons/cache"

@Injectable({ providedIn: 'root' })
export class JogadorService implements ApiService<Jogador> {
   public static get cached() { return cache('jogador') }

   public search(): Promise<Jogador[]>
   public search(nome: string): Promise<Jogador>
   public async search(request: string | undefined = undefined): Promise<Jogador | Jogador[] | undefined> {
      const users = await RestApi.get<Jogador[]>('/jogadores')
      const value = request ? [users.find(x => x.nome == request)] : users

      if (!value?.at(0)) throw "Não encontrou o usuário digitado!"
      if (value.length == 1) cache("jogador", value[0] as Jogador)

      return value.filter(x => !!x) as Jogador[]
   }

   public create = (jogador: Jogador) => RestApi.post(`/jogadores`, jogador, true) 

   public update = (jogador: Jogador) => RestApi.put(`/jogadores`, jogador, true)

   public delete = () => Promise.reject('Not implemented') 
}
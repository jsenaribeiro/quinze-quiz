import { Jogador, Jogo, Questao } from "./models"

export interface ApiService<T> {
   search(): Promise<T|T[]>
   create(data: T): Promise<T|void>
   update(data: T): Promise<T|void>
   delete(): Promise<T|void>
}

export interface FaseRequest {
   proxima: boolean
   usuario: Jogador
   jogo: Jogo
}
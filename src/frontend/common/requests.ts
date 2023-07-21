import { Jogador, Jogo, Questao } from "./models"

export interface ApiService<T> {
   search(): Promise<T|T[]>
   create(data: T): Promise<void>
   update(data: T): Promise<void>
   delete(): Promise<void>
}

export interface FaseRequest {
   proxima: boolean
   usuario: Jogador
   jogo: Jogo
}
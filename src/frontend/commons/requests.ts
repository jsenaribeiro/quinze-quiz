import { Jogador, Jogo, Questao } from "./models"

export interface ApiService<T> {
   search(): Promise<T|T[]>
   create(data: T): Promise<any>
   update(data: T): Promise<any>
   delete(): Promise<any>
}

export interface FaseRequest {
   proxima: boolean
   usuario: Jogador
   jogo: Jogo
}
import { Injectable } from "@angular/core"
import { RestApi, Jogo, ApiService, Jogador } from "commons"
import { JogadorService } from "./jogador.service"
import { NowService } from "./now.service"
import { cache } from "commons/cache"

@Injectable({providedIn: 'root'})
export class JogoService implements ApiService<Jogo> {
   constructor(private jogadorApi: JogadorService, private now: NowService) { }
   
   public static get cached(){ return cache('jogo') }
   
   public search = (): Promise<Jogo> => RestApi.get<Jogo>('/jogo')
   public update = (jogo: Jogo) => Promise.reject('Not implemented')
   public create = (jogo: Jogo) => Promise.reject('Not implemented') 
   public delete = () => Promise.reject('Not implemented') 
}
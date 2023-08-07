import { Injectable } from "@angular/core"
import { RestApi, Jogo, ApiService } from "commons"
import { cache } from "commons/cache"
import { NowService } from "./now.service"

@Injectable({providedIn: 'root'})
export class JogoService implements ApiService<Jogo> {
   constructor(private now: NowService) { }
   
   public static get cached(){ return cache('jogo') }
   
   public search = (): Promise<Jogo> => RestApi.get<Jogo>('/jogo').then(x => cache("jogo", x))
   public update = (jogo: Jogo) => Promise.reject('Not implemented')
   public create = (jogo: Jogo) => Promise.reject('Not implemented') 
   public delete = () => Promise.reject('Not implemented') 
}
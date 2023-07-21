import { Injectable } from "@angular/core"
import { JogadorService } from "./jogador.service"
import { JogoService } from "./jogo.service"

@Injectable({providedIn: 'root'})
export class ApiService {
   constructor(
      public jogo: JogoService,
      public jogador: JogadorService
   )
   {

   }
}
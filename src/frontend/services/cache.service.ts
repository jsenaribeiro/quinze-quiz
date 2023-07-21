import { Injectable } from "@angular/core"
import { JogadorService } from "./jogador.service"
import { JogoService } from "./jogo.service"

interface IndexValue<T> { name: string, list: T[], text: string }
interface IndexDictionary<T> { [x:string] : IndexValue<T> }

@Injectable({providedIn: 'root'})
export class CacheService {   
   constructor() { window['cache'] = this }

   public get jogo() { return JogoService.cached }

   public get jogador() { return JogadorService.cached }

   public get fase() { return this.jogo.fases[this.jogador.faseId] }

   public get questao() { return this.fase.questoes[this.jogador.questaoId] }

   public get imagem() { return this.jogo.imagens[this.fase.imagem] }

   private get dictionary(): IndexDictionary<any> {
      return {
         fase: { name: 'titulo', list: this.jogo.fases, text: this.fase.titulo },
         opcao: { name: 'texto', list: this.questao.opcoes, text: '' },
         questao: { name: 'texto', list: this.fase.questoes, text: this.questao.texto },
      }
   }

   public getOpcao(i: number) { return this.questao.opcoes[i] }

   public getIndex<T>(field: "fase"|"questao"|"opcao", value = ""): number {
      const { name, list, text } = {...this.dictionary}[field]
      return list.findIndex(x => x[name] == (text || value))
   }

   public getLimit<T>(field: "fase"|"questao"|"opcao", value = ""): [number, number, boolean] {
      const index = this.getIndex<T>(field, value)
      const total = this.dictionary[field].list.length-1
      const final = index == total

      return [ index, total, final ]
   }
}
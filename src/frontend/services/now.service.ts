import { Injectable } from "@angular/core"
import { JogadorService } from "./jogador.service"
import { JogoService } from "./jogo.service"
import { Fase, Opcao, Questao } from "commons"
import { cache } from "commons/cache"

interface IndexValue<T> { name: string, list: T[], text: string }
interface IndexDictionary<T> { [x:string] : IndexValue<T> }

@Injectable({providedIn: 'root'})
export class NowService {   
   constructor() { window['cache'] = this }

   private get dictionary(): IndexDictionary<any> {
      return {
         fase: { name: 'titulo', list: this.jogo.content, text: this.fase.titulo },
         opcao: { name: 'texto', list: this.questao.opcoes, text: '' },
         questao: { name: 'texto', list: this.fase.questoes, text: this.questao.texto },
      }
   }

   public get jogo() { return JogoService.cached }

   public get jogador() { return JogadorService.cached }

   public get fase() { return this.jogo.content.find((_,i) => i+1 == this.progresso("fase"))! }

   public get questao() { return this.fase.questoes.find((_, i) => i+1 == this.progresso("questao"))! }

   public get imagem() { return this.jogo.imagens[this.fase.imagemId] }

   public get classificacao() { 
      const query = x => x.usuario == this.jogador.nome
      const index = this.jogo.ranking.findIndex
      return (index(query) ?? 0) + 1
   }

   public progresso = (field: "fase"|"questao") => 
        field == "fase" ? Math.floor(this.jogador.progresso) + 1
      : parseInt(this.jogador.progresso?.toString().split(".").at(1) ?? "0") + 1

   public getOpcao(i: number) { return this.questao.opcoes[i] }

   public getIndex<T>(field: "fase"|"questao"|"opcao", value = ""): number {
      const { name, list, text } = {...this.dictionary}[field]
      return list.findIndex(x => x[name] == (text || value))
   }

   public getLimit<T>(field: "fase"|"questao"|"opcao", value = "") {
      const index = this.getIndex<T>(field, value) || 0
      const total = this.dictionary[field].list.length-1
      const final = index == total

      return { index, total, final }
   }

   public gotoNext<T>() {
      const fase = this.getLimit("fase")
      const questao = this.getLimit("questao")

      const faseIndex 
         = fase.final ? -1
         : questao.final ? fase.index + 1
         : 0;

      const questaoIndex = questao.final ? 0 : questao.index + 1

      if (faseIndex < 0) throw "Finalizou..."

      const progresso = parseFloat(`${faseIndex}.${questaoIndex}`)

      return cache('jogador', { ...this.jogador, progresso: progresso })
   }

   public isLatest(field: "fase"|"questao"|"opcao") {
      const progresso = this.jogador.progresso.toString()
      return this.getLimit(field).final
   }
}
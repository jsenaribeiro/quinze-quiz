import { IonicModule } from '@ionic/angular'
import { Component } from '@angular/core'
import { Jogador, Jogo, Questao, RestApi, waitAsync } from 'common'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { HeaderComponent, FooterComponent } from 'components'
import { ApiService, AppService, JogadorService } from 'services'
import { Router } from '@angular/router'
import { CacheService } from 'services/cache.service'

const imports = [IonicModule, CommonModule, FormsModule, HeaderComponent, FooterComponent]

@Component({
   imports,
   standalone: true,
   selector: 'app-quiz',
   templateUrl: 'quiz.page.html',
   styleUrls: ['quiz.page.css']
}) export class QuizPage {
   constructor(
      public app: AppService, 
      public db: CacheService, 
      public api: ApiService,
      public router: Router) { 
         this.app.changeBackground(db.imagem)
   }

   public correta = ""
   public acertou = false
   public respondeu = false

   public get loading() { return RestApi.loading }

   public getLetra = (i:number) => String.fromCharCode(i+65)

   public async onResposta(resposta: string) {
      this.correta = this.db.questao.opcoes
         .filter(x => x.pontos > 0)
         .map(x => x.texto)
         .find(_ => true)  ?? ""

      this.acertou = resposta == this.correta
      this.respondeu = true

      const opcao = this.db.questao.opcoes
         .filter(x => x.texto == resposta)
         .find(_ => true)

      if (opcao === undefined) 
         throw `OpcaoId nao encontrada... `

      const jogador = {...this.db.jogador}

      const ultimaFase = this.db.jogo.fases.length-1 == jogador.faseId
      const ultimaQuestao = this.db.fase.questoes.length-1 == jogador.questaoId
      const ultimoTudo = ultimaQuestao && ultimaFase

      const opcaoId = this.db.getIndex("opcao", resposta)
      const espera = 150 + (this.acertou ? 0 : this.correta.length * 3)

      console.debug(0, jogador)
      console.debug(1, { ultimaQuestao, ultimaFase, ultimoTudo })
      
      if (ultimoTudo) console.warn('finalizou...')

      jogador.pontuacao += opcao.pontos

      jogador.respostas.push({
         texto: resposta,
         opcaoId: opcaoId,
         faseId: opcao.faseId,
         questaoId: opcao.questaoId
      })         

      jogador.faseId += (ultimaQuestao ? 1 : 0)
      jogador.questaoId += (ultimaQuestao ? -jogador.questaoId : 1)

      await this.api.jogador.update(jogador)

      if (ultimaQuestao) this.router.navigateByUrl("/intro")
      if (ultimoTudo) this.router.navigateByUrl('/final')

      await waitAsync(espera, () => {
         this.correta = ""
         this.acertou = false
         this.respondeu = false
      })
   }
}
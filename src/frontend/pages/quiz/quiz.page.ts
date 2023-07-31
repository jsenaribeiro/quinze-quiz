import { IonicModule } from '@ionic/angular'
import { Component } from '@angular/core'
import { Jogador, Jogo, Questao, RestApi, waitAsync } from 'commons'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { HeaderComponent, FooterComponent } from 'components'
import { ApiService, AppService, JogadorService } from 'services'
import { Router } from '@angular/router'
import { NowService } from 'services/now.service'

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
      public now: NowService, 
      public api: ApiService,
      public router: Router) { 
         this.app.changeBackground(now.imagem)
   }

   public correta = ""
   public acertou = false
   public respondeu = false

   public get loading() { return RestApi.loading }

   public getLetra = (i:number) => String.fromCharCode(i+65)

   public async onResposta(resposta: string) {
      this.correta = this.now.questao.opcoes
         .filter(x => x.pontos > 0)
         .map(x => x.texto)
         .find(_ => true)  ?? ""

      this.acertou = resposta == this.correta
      this.respondeu = true

      const opcao = this.now.questao.opcoes
         .filter(x => x.texto == resposta)
         .find(_ => true)

      if (opcao === undefined) 
         throw `OpcaoId nao encontrada... `

      const jogador = {...this.now.jogador}

      const ultimaFase = this.now.isLatest("fase")
      const ultimaQuestao = this.now.isLatest("questao")
      const ultimoTudo = ultimaQuestao && ultimaFase

      const opcaoId = this.now.getIndex("opcao", resposta)
      const espera = 150 + (this.acertou ? 0 : this.correta.length * 3)

      console.debug(0, jogador)
      console.debug(1, { ultimaQuestao, ultimaFase, ultimoTudo })
      
      if (ultimoTudo) console.warn('finalizou...')

      jogador.pontos += opcao.pontos

      jogador.respondidas.push({
         certo: this.acertou,
         jogador: jogador.nome,
         respondido: resposta,
         progresso: jogador.progresso
      })

      const newJogador = this.now.gotoNext()

      await this.api.jogador.update(newJogador)

      if (ultimaQuestao) this.router.navigateByUrl("/intro")
      if (ultimoTudo) this.router.navigateByUrl('/final')

      await waitAsync(espera, () => {
         this.correta = ""
         this.acertou = false
         this.respondeu = false
      })
   }
}
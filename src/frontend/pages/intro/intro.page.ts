import { IonicModule } from '@ionic/angular'
import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { AppService } from 'services'
import { FooterComponent, HeaderComponent } from 'components'
import { Router } from '@angular/router'
import { CacheService } from 'services/cache.service'

const imports = [IonicModule, CommonModule, 
   FormsModule, HeaderComponent, FooterComponent]

@Component({
   imports,
   standalone: true,
   selector: 'app-intro',
   templateUrl: 'intro.page.html',
   styleUrls: ['intro.page.css']
}) export class IntroPage {
   public index = 0

   constructor(app: AppService, private db: CacheService, private router: Router) { 
      if (this.jogador.questaoId > 0) this.onLatest()
      else app.changeBackground(db.imagem)
   }

   public get total() { return this.db.fase.introducao.length }

   public get jogador() { return this.db.jogador }

   public get introducao() {
      const fase = this.db.fase
      const nome = this.jogador.nome
      const hour = new Date().getHours()
   
      const hora = hour < 13 ? "Bom dia"
          : hour < 18 ? "Boa tarde"
            : "Boa noite"
   
      const interpolando = x => x
         .replace("{JOGADOR}", nome)
         .replace("{SAUDACAO}", hora)
   
      for (var i of fase.introducao) {
         i.titulo = interpolando(i.titulo)
         i.texto = interpolando(i.texto)
      }
   
      return fase.introducao[this.index]
   }

   public async onLatest() {
      await this.router.navigate(["/quiz"])
      this.index = 0
      console.log('index', this.index)
   }
}


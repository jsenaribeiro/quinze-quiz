import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router'
import { IonicModule } from '@ionic/angular'
import environments from 'environments'
import { ApiService, AppService, JogadorService } from 'services'

@Component({
   standalone: true,
   selector: 'app-home',
   templateUrl: 'home.page.html',
   styleUrls: ['home.page.css'],
   imports: [IonicModule, CommonModule, FormsModule],
}) export class HomePage {
   constructor(app: AppService, private api: ApiService, private router: Router) { 
      // if (service.user?.nome) return      TODO:!
      app.changeBackground('bg-app.jpg')
      this.isProduction = environments.production
   }

   public usuario: string = ""

   public isProduction = false

   public async onClick() {
      await this.api.jogo.search()
      await this.api.jogador.search(this.usuario)      
      await this.router.navigate(['/intro'])
   }   
}

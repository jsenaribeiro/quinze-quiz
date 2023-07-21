import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router'
import { IonicModule } from '@ionic/angular'
import { AppService } from 'services'

@Component({
   standalone: true,
   selector: 'app-final',
   templateUrl: 'final.page.html',
   styleUrls: ['final.page.css'],
   imports: [IonicModule, CommonModule, FormsModule],
}) export class FinalPage {
   
}

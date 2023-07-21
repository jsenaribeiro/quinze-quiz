import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { IonicModule } from '@ionic/angular'
import { RestApi } from 'commons'

const imports = [IonicModule, CommonModule]

@Component({
   imports,
   standalone: true,
   selector: 'app-root',
   templateUrl: 'index.component.html',
   styleUrls: ['index.component.css'],
})
export class IndexComponent { 
   public get loading(){ return RestApi.loading }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RestApi } from 'common';

const imports = [IonicModule, CommonModule]

@Component({
   standalone: true,
   selector: 'app-root',
   templateUrl: 'app.component.html',
   styleUrls: ['app.component.css'],
   imports,
})
export class AppComponent { 
   public get loading(){ return RestApi.loading }
}

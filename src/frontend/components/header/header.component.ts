import { CommonModule } from "@angular/common"
import { Component, Input } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { IonicModule } from "@ionic/angular"

@Component({
   standalone: true,
   selector: 'quiz-header',
   templateUrl: 'header.component.html',
   styleUrls: ['header.component.css'],
   imports: [IonicModule, CommonModule, FormsModule],
}) export class HeaderComponent {
   @Input() ranking: number = 1;
   @Input() scoring: number = 0;
   @Input() username: string = "";
}

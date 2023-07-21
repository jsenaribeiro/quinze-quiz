import { CommonModule } from "@angular/common"
import { Component, EventEmitter, Input, Output } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { IonicModule } from "@ionic/angular"

@Component({
   standalone: true,
   selector: 'quiz-footer',
   templateUrl: 'footer.component.html',
   styleUrls: ['footer.component.css'],
   imports: [IonicModule, CommonModule, FormsModule],
}) export class FooterComponent {

   @Input() index: number = 0;
   @Input() total: number = 0;

   @Output() latest = new EventEmitter();
   @Output() change = new EventEmitter<number>()

   public get begin() { return this.index == 0 }

   public get final() { return this.index == this.total-1 }
   
   public onStep(voltar: boolean) {
      const top = this.total - 1
      const now = this.index + (voltar ? -1 : +1)
      const fix = now < 0 ? 0 : now > top ? top : now

      this.change.emit(fix)
   }
}

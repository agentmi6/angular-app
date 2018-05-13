import {Component} from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styles: [`
    .whiteText {
      color: white;
    }
  `]
})

export class TaskComponent {
  paragraphDisplayState = true;
  clicksArray = [];
  // clickCount = 1;

  changeState () {
    this.paragraphDisplayState = !this.paragraphDisplayState;
    // this.clicksArray.push(this.clickCount++);
    this.clicksArray.push(new Date());

  }
}

import {Component} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './practice.component.html',
 // styleUrls: ['./practice.component.css']
  styles: [`
    .addStatus {
      padding:25px 0;
    }
  `]
})


export class PracticeComponent {
  currentStatus = 'status unknown...';
  toggleInput = false;
  showStatus = 'none';

  toggleInputBtn() {
    // !this.toggleInput = (this.toggleInput ? false : true);
    this.toggleInput = !this.toggleInput;
  }

  setStatus(event) {
    // this.currentStatus = (<HTMLButtonElement>event.target);
    // const prevEl =  (<HTMLButtonElement>event.target).previousElementSibling;
    // const prevEl =  event.target.previousElementSibling;
    this.currentStatus = event.target.previousElementSibling.value;
  }

  getStatus() {
    console.log('currentStatus: ' + this.currentStatus);
    this.showStatus = 'block';
    return this.currentStatus;

  }

}

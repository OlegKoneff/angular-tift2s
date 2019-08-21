import { Component, ViewChild, ElementRef } from '@angular/core';
import {fromEvent} from 'rxjs';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild('mainInput', {static: false})
  public mainInput: ElementRef;
  name = 'Angular';
  event;
  showSeondInput = false;

  inputFocus(event) {
    console.log(event);
    event.target.blur();
    this.showSeondInput = true;
    setTimeout(() => {
      this.mainInput.nativeElement.focus();
    }, 0);
  }

  changeEvent(event) {
    this.name = `changeEvent ${event.target.value}`
  }

  keypressEvent(event) {
    this.name = `keypressEvent ${event.target.value}`
  }

  inputEvent(event) {
    this.name = `inputEvent ${event.target.value} ${event.target.key}`
    this.event = event;
    console.log(event);
  }

  pasteEvent(event) {
    this.name = `pasteEvent ${event.target.value}`
  }

  clearEvent() {
    this.showSeondInput = true;
    setTimeout(() => {

    });
    const obs = fromEvent(this.mainInput.nativeElement, 'click').subscribe((event) => {

    });
    this.mainInput.nativeElement.focus();

  }
}

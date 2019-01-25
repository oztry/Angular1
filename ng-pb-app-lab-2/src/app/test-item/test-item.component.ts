import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-item',
  templateUrl: './test-item.component.html',
  styleUrls: ['./test-item.component.scss']
})
export class TestItemComponent implements OnInit {
  public title: string;
  public counter = 0;
  public events: Array<MouseEvent> = [];

  constructor() { }

  ngOnInit() {
    this.title = 'Hej';
  }

  triggerClick(event: MouseEvent) {
    if (event.altKey) {
      this.title = 'Wcisniety z alt';
    } else {
      this.title = 'Wcisniety bez alt';
    }

    this.events.push(event);

    console.table(this.events);
    this.counter++;
  }

  getReversed(str: string) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str.substring(i, i + 1);
    }
    return reversed;
  }
}

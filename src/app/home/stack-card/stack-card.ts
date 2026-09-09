import { Component, input } from '@angular/core';
import { Stack } from '../stack';

@Component({
  selector: 'app-stack-card',
  templateUrl: './stack-card.html',
})
export class StackCard {

  stack = input.required<Stack>();

}

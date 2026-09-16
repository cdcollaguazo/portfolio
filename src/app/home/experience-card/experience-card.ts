import { Component, input } from '@angular/core';
import { Experience } from '../experience';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.html'
})
export class ExperienceCard {

  experience = input.required<Experience>();

}

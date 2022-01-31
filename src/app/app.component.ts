import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ac-pipes';
  convertText: string = "I Am Being Managed By Pipes";
  extrasolarPlanets: any = [
    {'name': 'CoRoT-7b'}, 
    {'name': 'Gliese 581'}, 
    {'name': 'HD 209458b'}, 
    {'name': 'HIP 13044b'}, 
    {'name': 'Kepler-186f'}, 
    {'name': 'Kepler-452b'}
  ];

// add somethign here
}

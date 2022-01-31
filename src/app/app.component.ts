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
  itemPrice: number = 5.50;

  // date
  currentDate = Date.now();
  numDateFormat = 1478496544151;
  getYear = 'Tue Dec 12 2018 11:20:18 GMT+0530';
  getTime = 'Wed Jan 20 2019 12:20:18 GMT+0530';

  customText: string = "Our solar system is made up of a star, eight planets,\
    and countless smaller bodies such as dwarf planets, asteroids and comets.";

}

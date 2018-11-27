import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SEED';
}

// export interface Mammal{
//   hair: string;
//   growHair();
// }
// export interface Climb {
//   climbTree()
// }
// export class Climbable implements Climb{
//   climbTree() {

//   };
// }
// enum directions {
//   LEFT = 45,
//   RIGHT = 55
// }

// export class Animal{
//   age: number;
//   breed: string;
//   name: string;
//   constructor(name:string) {
//       this.name = name;
//   }
// }

// export class Dog extends Animal{
//   age: number;
//   name: string;
//   breed: string;
//   dogHair: Mammal;

//   constructor(name: string) {
//       super(name);
//   }
//   move(moveRatio:number) {
//       switch(moveRatio) {
//           case directions.LEFT: {
//               console.log('turn left!');
//               break;
//           }
//           case directions.RIGHT: {
//               console.log('turn right!');
//               break;
//           }
//           default: {
//               //statements;
//               break;
//           }
//       }
//   }
//   bark(sound: string) {
//       return sound ='woof!';
//   }
// }
// export class Cat extends Animal{
//   age: number;
//   breed: string;
//   catHair: Mammal;

//   constructor(name: string) {
//       super(name);
//   }

//   meow(sound: string) {
//       return sound = 'meow!';
//   }
// }


import { Component, AfterViewInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flags-project';
  heading = 'Cristofer Carder Junior';
  faStar = faStar;
  faStarHalf = faStarHalf;
  rightOffset = 0;
  topOffset = 0;
  appropriateElementIndex = 2;
  flagsArr = [
    {
      src: './assets/flags/flag1.png',
      offsetX: 0,
      offsetY: 0,
    },
    {
      src: './assets/flags/flag2.png',
      offsetX: 30,
      offsetY: 0,
    },
    {
      src: './assets/flags/flag3.png',
      offsetX: 60,
      offsetY: 0,
    },
    {
      src: './assets/flags/flag4.png',
      offsetX: 90,
      offsetY: 0,
    },
    {
      src: './assets/flags/flag5.png',
      offsetX: 120,
      offsetY: 0,
    },
    {
      src: './assets/flags/flag6.png',
      offsetX: 90,
      offsetY: 0,
    },
    {
      src: './assets/flags/flag7.png',
      offsetX: 60,
      offsetY: 0,
    },
    {
      src: './assets/flags/flag8.png',
      offsetX: 30,
      offsetY: 0,
    },
    {
      src: './assets/flags/flag9.png',
      offsetX: 0,
      offsetY: 0,
    },
  ]

  removeFlag(removedFlag, index) {
    this.flagsArr = this.flagsArr.filter(item => item !== removedFlag);
    const flagsLength = this.flagsArr.length;
    let temp;
    for (let i = index; i < flagsLength; i++) {
      let currentFlagOffset = this.flagsArr[i].offsetX;
      if (i === index) { // first iteration
        temp = currentFlagOffset;
        this.flagsArr[i].offsetX = removedFlag.offsetX;
        continue;
      }
      let temp2 = currentFlagOffset;
      this.flagsArr[i].offsetX = temp;
      temp = temp2;
    }
  }
}

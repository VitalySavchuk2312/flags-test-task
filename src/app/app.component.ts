import { Component, AfterViewInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  heading = 'Cristofer Carder Junior';
  faStar = faStar;
  faStarHalf = faStarHalf;
  flagsArr = [
    {
      src: './assets/flags/flag1.png',
      offsetX: 0
    },
    {
      src: './assets/flags/flag2.png',
      offsetX: -30
    },
    {
      src: './assets/flags/flag3.png',
      offsetX: -60
    },
    {
      src: './assets/flags/flag4.png',
      offsetX: -90
    },
    {
      src: './assets/flags/flag5.png',
      offsetX: -120
    },
    {
      src: './assets/flags/flag6.png',
      offsetX: -90
    },
    {
      src: './assets/flags/flag7.png',
      offsetX: -60
    },
    {
      src: './assets/flags/flag8.png',
      offsetX: -30
    },
    {
      src: './assets/flags/flag9.png',
      offsetX: 0
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
    if (flagsLength % 2 === 0) {
      const startIndex = flagsLength / 2;
      let relativeFlag = startIndex - 1;
      this.alignFlags(startIndex, relativeFlag);
      for (let i = 0; i < flagsLength; i++) {
        this.flagsArr[i].offsetX -= 30;
      }
    } else {
      const startIndex = Math.round(flagsLength / 2);
      let relativeFlag = startIndex - 2;
      this.alignFlags(startIndex, relativeFlag);
    }
  }

  alignFlags(startIndex: number, relativeFlag: number) {
    const flagsLength = this.flagsArr.length;
    for (let i = startIndex; i < flagsLength; i++) {
      this.flagsArr[i].offsetX = this.flagsArr[relativeFlag].offsetX;
      relativeFlag--;
    }
  }

}

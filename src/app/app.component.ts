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
      offsetX: 0
    },
    {
      src: './assets/flags/flag2.png',
      offsetX: 30
    },
    {
      src: './assets/flags/flag3.png',
      offsetX: 60
    },
    {
      src: './assets/flags/flag4.png',
      offsetX: 90
    },
    {
      src: './assets/flags/flag5.png',
      offsetX: 120
    },
    {
      src: './assets/flags/flag6.png',
      offsetX: 90
    },
    {
      src: './assets/flags/flag7.png',
      offsetX: 60
    },
    {
      src: './assets/flags/flag8.png',
      offsetX: 30
    },
    {
      src: './assets/flags/flag9.png',
      offsetX: 0
    },
  ]

  removeFlag(flag, index) {
    let removedFlagOffsetX = flag.offsetX;
    this.flagsArr = this.flagsArr.filter(item => item !== flag);
    let temp;
    for (let i = index; i < this.flagsArr.length; i++) {
      const currentFlag = this.flagsArr[i];
      const nextFlag = this.flagsArr[i + 1];
      if (i === index) {
        // first iteration
        temp = currentFlag.offsetX;
        currentFlag.offsetX = removedFlagOffsetX;
        continue;
      }
      if (nextFlag) {
        currentFlag.offsetX = temp;
        temp = nextFlag.offsetX;
      }
    }
  }
 
  setOffset(i) {
    const offsetX = i * 50;
    const offsetY = i * 10;
    if (this.flagsArr.length - i < i) {
      const newOffset = this.flagsArr[i - this.appropriateElementIndex].offsetX;
      let styles = {
        'transform': 'translate(-' + newOffset + 'px,-' + offsetY + 'px)'
      }

        // only for first initialisation.
      return styles;
    }
    let styles = {
      'transform': 'translate(-' + offsetX + 'px,-' + offsetY + 'px)'
    }
    this.flagsArr[i].offsetX = offsetX;
    return styles;
  }
}

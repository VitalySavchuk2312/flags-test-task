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
  startTopPosition = 270;
  flagsArr = [
    {
      src: './assets/flags/flag1.png',
      offset: 0
    },
    {
      src: './assets/flags/flag2.png',
      offset: 0
    },
    {
      src: './assets/flags/flag3.png',
      offset: 0
    },
    {
      src: './assets/flags/flag4.png',
      offset: 0
    },
    {
      src: './assets/flags/flag5.png',
      offset: 0
    },
    {
      src: './assets/flags/flag6.png',
      offset: 0
    },
    {
      src: './assets/flags/flag7.png',
      offset: 0
    },
    {
      src: './assets/flags/flag8.png',
      offset: 0
    },
    {
      src: './assets/flags/flag9.png',
      offset: 0
    },
  ]

  ngOnInit() {
    if (this.flagsArr.length === 9) { // do it only during first initialistion
      this.alignItems();
    }
  }

  removeFlag(removedFlag) {
    this.flagsArr = this.flagsArr.filter(item => item !== removedFlag);
    this.startTopPosition -= 10;
    this.alignItems();
  }

  alignItems() {
    this.flagsArr[0].offset = this.startTopPosition;
    for (let i = 1; i < this.flagsArr.length; i++) {
      this.flagsArr[i].offset = this.flagsArr[i - 1].offset - 22;
    }
  }

}

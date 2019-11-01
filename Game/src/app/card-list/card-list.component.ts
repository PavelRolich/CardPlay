import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  imageList: Image[] = [
    { url: '../../assets/1.jpg', click: false, title: 1 },
    { url: '../../assets/1.jpg', click: false, title: 2 },
    { url: '../../assets/2.jpg', click: false, title: 1 },
    { url: '../../assets/2.jpg', click: false, title: 2 },
    { url: '../../assets/3.jpg', click: false, title: 1 },
    { url: '../../assets/3.jpg', click: false, title: 2 },
  ];
  count = 0;

  constructor() { }

  ngOnInit() {
    this.imageList = this.imageList.sort(() => {
      return Math.random() - 0.5;
    });
  }

  getCount() {
    let countImg: Image[] = [];
    this.imageList.map(img => {
      if (img.click === true) {
        countImg.push(img);
      }
    });
    if (countImg.length === 2) {
      if (countImg[0].url === countImg[1].url) {
        this.imageList.find(imgObject => {
          if (imgObject.url === countImg[0].url && imgObject.title === countImg[0].title) {
            imgObject.title = 0;
          }
          if (imgObject.url === countImg[1].url && imgObject.title === countImg[1].title) {
            imgObject.title = 0;
          }
        });
        this.count++;
      } else {
        this.onClick(countImg[0]);
        this.onClick(countImg[1]);
      }
    }
  }

  onClickCard(img: Image) {
    this.onClick(img);
    this.getCount();
  }

  onClick(img: Image) {
    if (img.title !== 0) {
      this.imageList.find(imgObject => {
        if (imgObject.url === img.url && imgObject.title === img.title) {
          imgObject.click = !img.click;
        }
      });
    }
  }

}
export interface Image {
  url: string;
  click: boolean;
  title: number;
}

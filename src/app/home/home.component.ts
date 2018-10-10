import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videos:any = [];

  init()
  {
    this.videos = [
      {title:'macron sur paris',src:'http://techslides.com/demos/sample-videos/small.mp4'},
      {title:'macron sur Nantes',src:'http://techslides.com/demos/sample-videos/small.mp4'},
      {title:'macron sur Marseille',src:'http://techslides.com/demos/sample-videos/small.mp4'},
      {title:'macron sur Bordeaux',src:'http://techslides.com/demos/sample-videos/small.mp4'},
      {title:'macron sur paris',src:'http://techslides.com/demos/sample-videos/small.mp4'},
      {title:'macron sur Nantes',src:'http://techslides.com/demos/sample-videos/small.mp4'},
      {title:'macron sur Marseille',src:'http://techslides.com/demos/sample-videos/small.mp4'},
      {title:'macron sur Bordeaux',src:'http://techslides.com/demos/sample-videos/small.mp4'},
      {title:'macron sur paris',src:'http://techslides.com/demos/sample-videos/small.mp4'},
      {title:'macron sur Nantes',src:'http://techslides.com/demos/sample-videos/small.mp4'},
      {title:'macron sur Marseille',src:'http://techslides.com/demos/sample-videos/small.mp4'},
      {title:'macron sur Bordeaux',src:'http://techslides.com/demos/sample-videos/small.mp4'}
    ];
  }

  constructor() { this.init(); }

  ngOnInit() {
  }

  

  
}

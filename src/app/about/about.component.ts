import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  bookstoreImage: "https://i.imgur.com/cRdyRYc.jpg";

  constructor() { }

  ngOnInit() {
  }

}
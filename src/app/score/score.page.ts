import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.page.html',
  styleUrls: ['./score.page.scss'],
})
export class ScorePage implements OnInit {
  no=0;
  up(){
    this.no++;
  }
  down(){
    if(this.no>0){
      this.no--;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}

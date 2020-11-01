import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material';


@Component({
  selector: 'app-main-frame',
  templateUrl: './main-frame.component.html',
  styleUrls: ['./main-frame.component.css']
})
export class MainFrameComponent implements OnInit {


    aRacers = ["Tyler B", "James B", "Chris W", "Alex S"]
    bRacers = ["Tyler C", "Greg K", "John H", "Paul S"]
    cRacers = ["Rick A", "Jack S", "David L", "Harold D"]
    dRacers = ["Tyler C", "Greg K", "John H", "Paul S"]

    allRacers = [
      {
        group: "A",
        racers: this.aRacers
      },
      {
        group: "B",
        racers: this.bRacers
      },
      {
        group: "C",
        racers: this.cRacers

      },
      {
        group: "D",
        racers: this.dRacers
      }
    ]


  constructor() {
   }

   NextRace () {
     this.allRacers.push(this.allRacers.splice(0,1)[0]);
   }

   ResetRace () {
     this.allRacers = [
      {
        group: "A",
        racers: this.aRacers
      },
      {
        group: "B",
        racers: this.bRacers
      },
      {
        group: "C",
        racers: this.cRacers

      },
      {
        group: "D",
        racers: this.dRacers
      }
    ]
   }

  ngOnInit() {
  }

  @ViewChild(MatAccordion) accordion: MatAccordion;

  

}

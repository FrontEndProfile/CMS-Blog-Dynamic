import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';
import { Observable } from 'rxjs';
import { gsap } from "gsap";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
    
})
export class HomeComponent implements OnInit {
  //add scr tag from assets path
  myScriptElement: HTMLScriptElement | undefined;


  blogData$: Observable<any> | undefined;
  constructor(private contentFull: ContentService) { }

  ngOnInit(): void {
    this.blogData$ = this.contentFull.getAllEntries();
    // if (this.blogData$) {
    //   gsap.from(".test", {
    //     // color:'red',
    //     delay: 2,
    //   })
    // }
    // create Elm for Scr-tag in Component
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "/assets/js/code.js"
    document.body.appendChild(this.myScriptElement)



  }
}

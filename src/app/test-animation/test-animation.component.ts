import { Component, OnInit } from '@angular/core';
// import * as $ from "jquery"



@Component({
  selector: 'app-test-animation',
  templateUrl: './test-animation.component.html',
  styleUrls: ['./test-animation.component.scss']
})
export class TestAnimationComponent implements OnInit {

  myScriptElement: HTMLScriptElement | undefined;


  ngOnInit(): void {
    // $(document).ready(function () {
    //   var q = document.createElement("script");
    //   q.type = "text/javascript";
    //   q.src = "/assets/js/test.js";
    //   $("body").append(q);
    // });
    // $(document).ready(function () {
    //   var s = document.createElement("script");
    //   s.type = "text/javascript";
    //   s.src = "/assets/js/view.js";
    //   $("body").append(s);
    // });
  }

}

import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ContentService} from '../services/content.service'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.scss']
})
export class ViewPageComponent implements OnInit {
  
  blogDataId$ : Observable<any> | undefined;
  constructor(private route :ActivatedRoute , private contentfullservice:ContentService ){}
  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        const id = params['id'];
        this.blogDataId$ = this.contentfullservice.getEntryById(id)
      }
    )

  }
  
}

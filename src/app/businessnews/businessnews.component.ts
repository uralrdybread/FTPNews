import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.scss']
})
export class BusinessnewsComponent {
  businessNewsDisplay:any = [];

  constructor(private _services:NewsapiservicesService){}


  ngOnInit(): void{
    this._services.businessNews().subscribe((result) => {
      this.businessNewsDisplay = result.articles;
    })
  }
}

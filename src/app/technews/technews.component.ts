import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';
@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.scss']
})
export class TechnewsComponent {

  constructor(private _services:NewsapiservicesService){}

  techNewsDisplay:any = [];

  ngOnInit(): void{
    this._services.techNews().subscribe((result) => {
      this.techNewsDisplay = result.articles;
    })
  }

}

import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';


@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.scss']
})
export class TopheadingComponent {

  constructor(private _service:NewsapiservicesService){}
  

  topHeadingDisplay:any = [];


  ngOnInit(): void {
      this._service.topHeading().subscribe((result) => {
        console.log(result);
        this.topHeadingDisplay = result.articles;
      })
  }

}

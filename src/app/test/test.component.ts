import { Component, OnInit } from '@angular/core';
import { GetserviceService } from '../getservice.service';
import {interval} from 'rxjs';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  datalist;
  ittaration = interval(10000);
  rawdatajson: string;
  searchfilter ={title:''};
  constructor(private service: GetserviceService) { }

  ngOnInit() {
    this.ittaration.subscribe(() => this.getdata());
  }

  getdata() {
    return this.service.data().subscribe(res => {
      console.log(res);
      this.datalist = res['hits']
    });
  }
  modal(event){
    if(event.type == 'click'){
      console.log(event.row);
      this.rawdatajson=JSON.stringify(event.row)
    }
  }
}

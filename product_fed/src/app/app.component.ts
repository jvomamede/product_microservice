import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  products: Array<any> = [];

  constructor(
    private service: AppService
  ) {}

  ngOnInit(): void {
    this.service.allProduct().subscribe((res) => {
      this.products = res;
    })
  }
}

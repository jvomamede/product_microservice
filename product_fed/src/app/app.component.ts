import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = '';

  constructor(
    private service: AppService
  ) {}

  ngOnInit(): void {
    this.service.getProductById(1).subscribe((res: any) => {
      console.log('Response: ', res)
    })
  }
}

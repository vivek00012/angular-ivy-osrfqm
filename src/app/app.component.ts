import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  //name = 'Angular ' + VERSION.major;
  // api : https://jsonplaceholder.typicode.com/users
  public tableData: any = [];
  public tempData: any = [];
  public searchKey: string = null;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getData().subscribe((data: any) => {
      this.tableData = data.map((res) => {
        return {
          id: res.id,
          name: res.name,
          username: res.username,
          email: res.email,
        };
      });
      this.tempData = [...this.tableData];
      console.log(this.tableData);
    });
  }

  searchTable(event): void {
    const key = event.target.value;
    if (!key) {
      this.tableData = this.tempData;
      return;
    }
    this.tableData = this.tempData.filter(
      (d) =>
        d?.id === parseInt(key) ||
        d?.name.toLowerCase().startsWith(key) ||
        d?.username.toLowerCase().startsWith(key) ||
        d?.email.toLowerCase().startsWith(key)
    );
  }
}

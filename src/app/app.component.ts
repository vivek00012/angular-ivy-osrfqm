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
      console.log(this.tableData);
    });
  }

  searchTable(event): void {
    const key = event.target.value;
    if (!key) return;
    console.log(key, this.tableData);
    let nameFilter = this.tableData.filter((d) => d?.name.startsWith(key));

    console.log('name', nameFilter);

    // let userNameFilter =this.tableData.filter(d =>d?.userName && d?.userName.toString().startsWith(key));
    // let emailFilter =this.tableData.filter(d => d?.email && d?.email.toString().startsWith(key));

    // if(nameFilter?.length){
    //   this.tableData = nameFilter;
    //   return;
    // }
    // if(userNameFilter?.length){
    //   this.tableData = nameFilter;
    //   return;
    // }
    // if(emailFilter?.length){
    //   this.tableData = nameFilter;
    //   return;
    // }
    console.log(this.tableData);
  }
}

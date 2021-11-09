import { Component } from '@angular/core';
import { GridDataResult, PageChangeEvent } from "@progress/kendo-angular-grid";
import { SortDescriptor } from "@progress/kendo-data-query";

import { Observable } from "rxjs";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'kendo-angular-app';
  public gridData: any[] = [
    {
        StudentID: 1,
        StudentName: 'dumindu',
        Gender:'male',
        Address:'maharagama',
        MobileNo:"033333333",
        DateOfBirth:"01/02/2020",
        Age:"20"

    },
];
}

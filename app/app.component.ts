import { Component } from '@angular/core';

@Component({
selector: 'my-app',
template: `
  <div class="example-config">
      Selected date is {{ value | kendoDate:'dd MMMM yyyy' }}
  </div>
    <kendo-datepicker
        [activeView]="'year'"
        [format]="'dd MMMM yyyy'"
        [(value)]="value"
    ></kendo-datepicker>
`
})
export class AppComponent {
public value: Date;
}

import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-all';
}

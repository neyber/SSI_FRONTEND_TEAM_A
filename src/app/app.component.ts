import {Component, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  public showMenu = true;
  public menus: any;
  currentTabNameSubscription: Subscription = new Subscription();


  ngOnInit(){

  }
}

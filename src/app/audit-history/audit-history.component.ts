import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-audit-history',
  templateUrl: './audit-history.component.html',
  styleUrls: ['./audit-history.component.scss']
})
export class AuditHistoryComponent implements OnInit {
  history: any;
  constructor() { }

  ngOnInit() {
  }

}

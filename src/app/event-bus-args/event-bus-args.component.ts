import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'trm-event-bus-args',
  templateUrl: './event-bus-args.component.html',
  styleUrls: ['./event-bus-args.component.css']
})
export class EventBusArgsComponent implements OnInit {

  type: string;
  data: any;

}

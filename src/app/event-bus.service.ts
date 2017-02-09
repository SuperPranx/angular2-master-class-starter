import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subject } from 'rxjs/Subject';
import { EventBusArgs } from './event-bus-args/event-bus-args.component';

@Injectable()
export class EventBusService {

  private messages$ = new Subject<EventBusArgs>();

  constructor() { }

  emit(eventType: string, data: any) {
    this.messages$.next({type: eventType, data: data});
  }
  
  observe(eventType: string) {
    return this.messages$
               .filter(args => args.type === eventType)
               .map(args => args.data);
  }
}

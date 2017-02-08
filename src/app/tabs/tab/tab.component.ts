import { Component, OnInit, Input } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component'

@Component({
  selector: 'trm-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  selected: boolean = false;
  @Input() title: string = '';

  constructor(private ancestor: TabsComponent) { }

  ngOnInit() {
    this.ancestor.addTab(this);
  }

}

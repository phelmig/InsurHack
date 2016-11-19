import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-policy-card',
  templateUrl: './policy-card.component.html',
  styleUrls: ['./policy-card.component.styl'],
  host: {
      '[class.policy-card--selected]': 'selected',
      '[class.policy-card--expanded]': 'expanded',
      '(click)': '_onSelectionChanged(!selected)'}
})
export class PolicyCardComponent implements OnInit {

  @Input() policyName: string
  @Input() selected: boolean;
  @Input() level: number;

  expanded: boolean = false;

  @Output() onSelectionChanged = new EventEmitter<boolean>();
  @Output() onLevelChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }
  
  _onSelectionChanged(selected) {
      this.selected = selected;
      this.onSelectionChanged.emit(selected);
  }

  _click() {
      this._onSelectionChanged(!this.selected);
  }

  toggleExpand(event) {
      event.stopPropagation();
      this.expanded = !this.expanded;
  }

}

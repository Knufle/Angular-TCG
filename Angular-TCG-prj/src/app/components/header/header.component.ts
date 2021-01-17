import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  // @Output() navigationFired = new EventEmitter<number>();
  // @Output() featureSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  // onSelect(feature: string) {
  //   this.featureSelected.emit(feature);
  // }

  // onRecipesClicked() {
  //   this.navigationFired.emit(0);
  // }

  // onShoppingClicked() {
  //   this.navigationFired.emit(1);
  // }

}

import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() isDetail: boolean;

  constructor(private location: Location) { }

  onBack() {
    this.location.back();
  }

  ngOnInit() {
  }
}
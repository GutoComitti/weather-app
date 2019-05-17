import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  
  @Input() isDetail: boolean;
  @ViewChild('searchInput') searchInput: ElementRef;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSearch(){
  	const searchValue = this.searchInput.nativeElement.value;
    this.router.navigateByUrl('/').then(() => {
  		this.router.navigateByUrl('/search/'+searchValue);
    });
  }
  onKeydown(event) {
	  if (event.key === "Enter") {
	  	this.onSearch();
	  }
	}

}

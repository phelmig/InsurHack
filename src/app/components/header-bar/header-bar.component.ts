import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage-service';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
})
export class HeaderBarComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit() {
  }

  onProfileClicked() {
      this.localStorageService.clear();
  }

}

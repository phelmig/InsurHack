import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage-service';

@Component({
  selector: 'app-monster-bar',
  templateUrl: './monster-bar.component.html',
})
export class MonsterBarComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit() {
  }

  onProfileClicked() {
      this.localStorageService.clear();
  }

}

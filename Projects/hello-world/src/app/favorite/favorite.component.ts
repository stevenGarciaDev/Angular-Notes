import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
  isSelected: boolean;

  constructor() {}

  ngOnInit(): void {}

  renderButtonText() {
    return this.isSelected ? 'Favorite Button' : 'Button';
  }

  toggle() {
    this.isSelected = !this.isSelected;
  }
}

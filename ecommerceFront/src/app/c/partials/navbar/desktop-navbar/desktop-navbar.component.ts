import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/i/category';
import { CategoryService } from 'src/app/s/category.service';

@Component({
  selector: 'app-desktop-navbar',
  templateUrl: './desktop-navbar.component.html',
  styleUrls: ['./desktop-navbar.component.scss'],
})
export class DesktopNavbarComponent implements OnInit {
  constructor(private _categories: CategoryService) {}

  public categories: Category[] = this._categories.category;

  ngOnInit(): void {}
}

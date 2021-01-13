import { Component, OnInit } from '@angular/core';
import { NFrameService } from 'src/app/s/animation/n-frame.service';
import { CategoryService } from 'src/app/s/category.service';
declare let $: any;

@Component({
  selector: 'app-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.scss'],
})
export class MobileNavbarComponent implements OnInit {
  constructor(
    private _nframe: NFrameService,
    private _categories: CategoryService
  ) {}

  ngOnInit(): void {
    this._nframe.drop();
  }

  navIncrement: boolean = true;

  onNavOpen() {
    this.navIncrement
      ? $('#nav').addClass('fa-times')
      : $('#nav').removeClass('fa-times');
    this.navIncrement = !this.navIncrement;
  }

  public menuOpen: boolean = false;
  public categories = this._categories.category;
}

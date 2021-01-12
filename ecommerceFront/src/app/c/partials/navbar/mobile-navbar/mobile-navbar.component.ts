import { Component, OnInit } from '@angular/core';
import { NFrameService } from 'src/app/s/animation/n-frame.service';

@Component({
  selector: 'app-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.scss'],
})
export class MobileNavbarComponent implements OnInit {
  constructor(private _nframe: NFrameService) {}

  ngOnInit(): void {
    this._nframe.drop();
  }

  public menuOpen: boolean = false;

  onMenuOpen() {
    this.menuOpen = !this.menuOpen;
    console.log(this.menuOpen);
  }
}

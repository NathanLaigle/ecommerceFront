import { Component, HostListener, OnInit } from '@angular/core';
import { NFrameService } from './s/animation/n-frame.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  item$: Observable<any[]>;
  constructor(private _nframe: NFrameService, firestore: AngularFirestore) {}

  innerWidth: number;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this._nframe.doAll();
    this.item$.subscribe((data) => {
      console.log(data);
    });
  }
}

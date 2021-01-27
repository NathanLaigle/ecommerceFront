import { Injectable } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  constructor(private _toastr: ToastrService) {}
  showSuccess(message: string, title: string, option: {}) {
    this._toastr.success(message, title, option);
  }

  showError(message: string, title: string) {
    this._toastr.error(message, title);
  }

  showInfo(message: string, title: string) {
    this._toastr.info(message, title);
  }

  showWarning(message: string, title: string) {
    this._toastr.warning(message, title);
  }
}

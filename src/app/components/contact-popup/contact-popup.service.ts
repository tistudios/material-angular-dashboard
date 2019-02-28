import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs/index';

@Injectable()
export class ContactPopupService {
  private timer;
  private isOpen$ = new BehaviorSubject(false);
  private firstTime = false;

  private data = {
    email: '',
    message: '',
  };

  constructor() {
    this.timer = setTimeout(() => {
      if (!this.firstTime) {
        this.firstTime = true;
        this.isOpen$.next(true);
      }
    },                      10000);
  }

  public isOpen(): Observable<any> {
    return this.isOpen$;
  }

  public setIsOpen(value: boolean) {
    this.isOpen$.next(value);
    this.firstTime = (value) ? true : this.firstTime;
  }

  public set dataForm(value) {
    this.data.email = value.email;
    this.data.message = value.message;
  }

  public get dataForm() {
    return this.data;
  }
}

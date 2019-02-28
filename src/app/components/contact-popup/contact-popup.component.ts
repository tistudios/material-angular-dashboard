import { AfterViewInit, ChangeDetectorRef, Component, HostBinding, OnDestroy, OnInit } from '@angular/core';

import { UpgradableComponent } from 'theme/components/upgradable/upgradable.component';
import { ContactPopupService } from './contact-popup.service';

@Component({
  selector: 'app-contact-card',
  styleUrls: ['./contact-popup.component.scss'],
  templateUrl: './contact-popup.component.html',
})
export class ContactPopupComponent extends UpgradableComponent implements AfterViewInit, OnDestroy {
  @HostBinding('class.contact-popup') private readonly contact = true;
  public isOpen = false;

  public readonly socials = [
    {
      name: 'github',
      url: 'https://github.com/CreativeIT',
    },
    {
      name: 'facebook',
      url: 'https://www.facebook.com/creativeit.io/',
    },
    {
      name: 'twitter',
      url: 'https://twitter.com/CreativeITeam',
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/company/creativeit/',
    },
    {
      name: 'behance',
      url: 'https://www.behance.net/CreativeIT_group',
    },
    {
      name: 'dribbble',
      url: 'https://dribbble.com/CreativeIT_Team',
    },
  ];

  public form = {
    email: '',
    message: '',
  };

  constructor(private service: ContactPopupService,
              private ref: ChangeDetectorRef) {
    super();
  }

  public ngAfterViewInit() {
    this.form = this.service.dataForm;
    this.service.isOpen().subscribe((value) => {
      this.isOpen = value;
      this.updateDom();
    });
  }

  private updateDom() {
    this.ref.detectChanges();
    componentHandler.upgradeDom();
  }

  public ngOnDestroy() {
    this.service.dataForm = this.form;
    this.ref.detach();
  }

  public sendMessage(event) {
    this.form.email = '';
    this.form.message = '';
    this.updateDom();
    this.toggleWindow();
  }

  public toggleWindow() {
    this.service.setIsOpen(!this.isOpen);
  }
}

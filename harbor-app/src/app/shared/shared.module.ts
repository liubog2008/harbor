import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { CookieService } from 'angular2-cookie/core';

import { SessionService } from '../shared/session.service';
import { MessageComponent } from '../global-message/message.component';

import { MessageService } from '../global-message/message.service';
import { MaxLengthExtValidatorDirective } from './max-length-ext.directive';
import { FilterComponent } from './filter/filter.component';
import { HarborActionOverflow } from './harbor-action-overflow/harbor-action-overflow';
import { TranslateModule } from "@ngx-translate/core";

import { RouterModule } from '@angular/router';

import { DeletionDialogComponent } from './deletion-dialog/deletion-dialog.component';
import { DeletionDialogService } from './deletion-dialog/deletion-dialog.service';
import { BaseRoutingResolver } from './route/base-routing-resolver.service';
import { SystemAdminGuard } from './route/system-admin-activate.service';
import { NewUserFormComponent } from './new-user-form/new-user-form.component';
import { InlineAlertComponent } from './inline-alert/inline-alert.component';

@NgModule({
  imports: [
    CoreModule,
    TranslateModule,
    RouterModule
  ],
  declarations: [
    MessageComponent,
    MaxLengthExtValidatorDirective,
    FilterComponent,
    HarborActionOverflow,
    DeletionDialogComponent,
    NewUserFormComponent,
    InlineAlertComponent
  ],
  exports: [
    CoreModule,
    MessageComponent,
    MaxLengthExtValidatorDirective,
    FilterComponent,
    HarborActionOverflow,
    TranslateModule,
    DeletionDialogComponent,
    NewUserFormComponent,
    InlineAlertComponent
  ],
  providers: [
    SessionService,
    MessageService,
    CookieService,
    DeletionDialogService,
    BaseRoutingResolver,
    SystemAdminGuard]
})
export class SharedModule {

}
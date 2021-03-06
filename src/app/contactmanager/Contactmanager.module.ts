
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../share/material.module';


import {ToolbarComponent} from './component/toolbar/toolbar.component';
import {MainContentComponent} from './component/main-content/main-content.component';
import {SidenavComponent} from './component/sidenav/sidenav.component';
import {ContactmanagerAppComponent} from './contactmanager-app.component';
import {Routes, RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {UserService} from './service/user.service';
import {HttpClientModule} from '@angular/common/http';
import { NotesComponent } from './component/notes/notes.component';
import { NewContactDialogComponent } from './component/new-contact-dialog/new-contact-dialog.component';

const routes: Routes = [
  {
    path: '', component: ContactmanagerAppComponent,
    children: [
      {path: ':id', component: MainContentComponent},
      {path: '', component: MainContentComponent}
    ]
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  declarations: [
    ContactmanagerAppComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent,
    NotesComponent,
    NewContactDialogComponent
  ],
  imports:
    [
    CommonModule,
      MaterialModule,
      FlexLayoutModule,
      ReactiveFormsModule,
      FormsModule,
      RouterModule.forChild(routes),
      HttpClientModule
  ],
  providers: [
    UserService
  ]
})

export class ContactmanagerModule{}

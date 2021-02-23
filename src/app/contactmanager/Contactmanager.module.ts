
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../share/material.module';


import {ToolbarComponent} from './component/toolbar/toolbar.component';
import {MainContentComponent} from './component/main-content/main-content.component';
import {SidenavComponent} from './component/sidenav/sidenav.component';
import {ContactmanagerAppComponent} from './contactmanager-app.component';
import {Routes, RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';

const routes: Routes = [
  {
    path: '', component: ContactmanagerAppComponent, children: [
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
    SidenavComponent
  ],
  imports:
    [
    CommonModule,
      MaterialModule,
      FlexLayoutModule,
      FormsModule,
      RouterModule.forChild(routes)
  ]
})

export class ContactmanagerModule{}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewContactDialogComponent } from './new-contact-dialog.component';

describe('NewContactDialogComponent', () => {
  let component: NewContactDialogComponent;
  let fixture: ComponentFixture<NewContactDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewContactDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewContactDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

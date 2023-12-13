import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersLoginOutComponent } from './users-login-out.component';

describe('UsersLoginOutComponent', () => {
  let component: UsersLoginOutComponent;
  let fixture: ComponentFixture<UsersLoginOutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersLoginOutComponent]
    });
    fixture = TestBed.createComponent(UsersLoginOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyFormComponent } from './verify-form.component';

describe('VerifyFormComponent', () => {
  let component: VerifyFormComponent;
  let fixture: ComponentFixture<VerifyFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifyFormComponent]
    });
    fixture = TestBed.createComponent(VerifyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I18nselectComponent } from './i18nselect.component';

describe('I18nselectComponent', () => {
  let component: I18nselectComponent;
  let fixture: ComponentFixture<I18nselectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [I18nselectComponent]
    });
    fixture = TestBed.createComponent(I18nselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

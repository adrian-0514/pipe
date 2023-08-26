import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesAgularComponent } from './pipes-agular.component';

describe('PipesAgularComponent', () => {
  let component: PipesAgularComponent;
  let fixture: ComponentFixture<PipesAgularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipesAgularComponent]
    });
    
    fixture = TestBed.createComponent(PipesAgularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuComponent } from './eu.component';

describe('EuComponent', () => {
  let component: EuComponent;
  let fixture: ComponentFixture<EuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EuComponent]
    });
    fixture = TestBed.createComponent(EuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
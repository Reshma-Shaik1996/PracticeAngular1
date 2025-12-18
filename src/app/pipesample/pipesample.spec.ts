import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pipesample } from './pipesample';

describe('Pipesample', () => {
  let component: Pipesample;
  let fixture: ComponentFixture<Pipesample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Pipesample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pipesample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

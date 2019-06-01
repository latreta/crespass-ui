import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LojinhasComponent } from './lojinhas.component';

describe('LojinhasComponent', () => {
  let component: LojinhasComponent;
  let fixture: ComponentFixture<LojinhasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LojinhasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LojinhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

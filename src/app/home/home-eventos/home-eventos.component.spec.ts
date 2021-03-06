import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEventosComponent } from './home-eventos.component';

describe('HomeEventosComponent', () => {
  let component: HomeEventosComponent;
  let fixture: ComponentFixture<HomeEventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeEventosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

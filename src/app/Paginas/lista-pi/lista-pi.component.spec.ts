import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPIComponent } from './lista-pi.component';

describe('ListaPIComponent', () => {
  let component: ListaPIComponent;
  let fixture: ComponentFixture<ListaPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

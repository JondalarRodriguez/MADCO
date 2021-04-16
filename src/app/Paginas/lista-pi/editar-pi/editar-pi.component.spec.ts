import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPiComponent } from './editar-pi.component';

describe('EditarPiComponent', () => {
  let component: EditarPiComponent;
  let fixture: ComponentFixture<EditarPiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

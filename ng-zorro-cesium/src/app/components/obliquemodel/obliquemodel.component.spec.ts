import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObliquemodelComponent } from './obliquemodel.component';

describe('ObliquemodelComponent', () => {
  let component: ObliquemodelComponent;
  let fixture: ComponentFixture<ObliquemodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObliquemodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObliquemodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

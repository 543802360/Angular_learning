import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MousepositionComponent } from './mouseposition.component';

describe('MousepositionComponent', () => {
  let component: MousepositionComponent;
  let fixture: ComponentFixture<MousepositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MousepositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MousepositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

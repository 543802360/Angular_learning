import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenesettingComponent } from './scenesetting.component';

describe('ScenesettingComponent', () => {
  let component: ScenesettingComponent;
  let fixture: ComponentFixture<ScenesettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenesettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenesettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayerTreeComponent } from './overlayer-tree.component';

describe('OverlayerTreeComponent', () => {
  let component: OverlayerTreeComponent;
  let fixture: ComponentFixture<OverlayerTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayerTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayerTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

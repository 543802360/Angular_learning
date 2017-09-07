import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrisislistComponent } from './crisislist.component';

describe('CrisislistComponent', () => {
  let component: CrisislistComponent;
  let fixture: ComponentFixture<CrisislistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrisislistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrisislistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallInfoProfileComponent } from './small-info-profile.component';

describe('SmallInfoProfileComponent', () => {
  let component: SmallInfoProfileComponent;
  let fixture: ComponentFixture<SmallInfoProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallInfoProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallInfoProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

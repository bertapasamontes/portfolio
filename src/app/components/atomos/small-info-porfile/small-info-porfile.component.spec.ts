import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallInfoPorfileComponent } from './small-info-porfile.component';

describe('SmallInfoPorfileComponent', () => {
  let component: SmallInfoPorfileComponent;
  let fixture: ComponentFixture<SmallInfoPorfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallInfoPorfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallInfoPorfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

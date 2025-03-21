import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxProjectComponent } from './box-project.component';

describe('BoxProjectComponent', () => {
  let component: BoxProjectComponent;
  let fixture: ComponentFixture<BoxProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesDropdownComponent } from './languages-dropdown.component';

describe('LanguagesDropdownComponent', () => {
  let component: LanguagesDropdownComponent;
  let fixture: ComponentFixture<LanguagesDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguagesDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguagesDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

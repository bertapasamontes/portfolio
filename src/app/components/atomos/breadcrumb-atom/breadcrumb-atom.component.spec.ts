import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbAtomComponent } from './breadcrumb-atom.component';

describe('BreadcrumbAtomComponent', () => {
  let component: BreadcrumbAtomComponent;
  let fixture: ComponentFixture<BreadcrumbAtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcrumbAtomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadcrumbAtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbMoleculeComponent } from './breadcrumb-molecule.component';

describe('BreadcrumbMoleculeComponent', () => {
  let component: BreadcrumbMoleculeComponent;
  let fixture: ComponentFixture<BreadcrumbMoleculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcrumbMoleculeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadcrumbMoleculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

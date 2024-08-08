import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FactFileDetailsPage } from './fact-file-details.page';

describe('FactFileDetailsPage', () => {
  let component: FactFileDetailsPage;
  let fixture: ComponentFixture<FactFileDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FactFileDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

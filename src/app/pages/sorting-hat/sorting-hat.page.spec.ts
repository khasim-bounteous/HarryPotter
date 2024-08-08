import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SortingHatPage } from './sorting-hat.page';

describe('SortingHatPage', () => {
  let component: SortingHatPage;
  let fixture: ComponentFixture<SortingHatPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingHatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

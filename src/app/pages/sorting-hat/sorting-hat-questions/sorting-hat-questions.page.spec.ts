import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SortingHatQuestionsPage } from './sorting-hat-questions.page';

describe('SortingHatQuestionsPage', () => {
  let component: SortingHatQuestionsPage;
  let fixture: ComponentFixture<SortingHatQuestionsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingHatQuestionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

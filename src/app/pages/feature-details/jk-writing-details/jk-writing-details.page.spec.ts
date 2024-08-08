import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JkWritingDetailsPage } from './jk-writing-details.page';

describe('JkWritingDetailsPage', () => {
  let component: JkWritingDetailsPage;
  let fixture: ComponentFixture<JkWritingDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JkWritingDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

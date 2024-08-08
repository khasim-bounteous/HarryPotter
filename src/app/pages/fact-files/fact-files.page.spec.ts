import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FactFilesPage } from './fact-files.page';

describe('FactFilesPage', () => {
  let component: FactFilesPage;
  let fixture: ComponentFixture<FactFilesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FactFilesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

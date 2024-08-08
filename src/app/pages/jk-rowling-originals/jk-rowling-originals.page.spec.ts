import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JkRowlingOriginalsPage } from './jk-rowling-originals.page';

describe('JkRowlingOriginalsPage', () => {
  let component: JkRowlingOriginalsPage;
  let fixture: ComponentFixture<JkRowlingOriginalsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JkRowlingOriginalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

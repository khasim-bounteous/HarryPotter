import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemPage } from './tem.page';

describe('TemPage', () => {
  let component: TemPage;
  let fixture: ComponentFixture<TemPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

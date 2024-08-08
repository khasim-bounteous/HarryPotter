import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WandPage } from './wand.page';

describe('WandPage', () => {
  let component: WandPage;
  let fixture: ComponentFixture<WandPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

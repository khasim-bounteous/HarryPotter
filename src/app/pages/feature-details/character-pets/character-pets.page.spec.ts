import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterPetsPage } from './character-pets.page';

describe('CharacterPetsPage', () => {
  let component: CharacterPetsPage;
  let fixture: ComponentFixture<CharacterPetsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterPetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

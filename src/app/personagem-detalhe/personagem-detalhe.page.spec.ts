import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonagemDetalhePage } from './personagem-detalhe.page';

describe('PersonagemDetalhePage', () => {
  let component: PersonagemDetalhePage;
  let fixture: ComponentFixture<PersonagemDetalhePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonagemDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

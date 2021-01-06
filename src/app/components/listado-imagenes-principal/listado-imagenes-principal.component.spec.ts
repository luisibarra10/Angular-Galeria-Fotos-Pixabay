import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoImagenesPrincipalComponent } from './listado-imagenes-principal.component';

describe('ListadoImagenesPrincipalComponent', () => {
  let component: ListadoImagenesPrincipalComponent;
  let fixture: ComponentFixture<ListadoImagenesPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoImagenesPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoImagenesPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

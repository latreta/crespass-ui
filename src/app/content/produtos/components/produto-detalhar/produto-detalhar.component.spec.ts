import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoDetalharComponent } from './produto-detalhar.component';

describe('ProdutoDetalharComponent', () => {
  let component: ProdutoDetalharComponent;
  let fixture: ComponentFixture<ProdutoDetalharComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoDetalharComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoDetalharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

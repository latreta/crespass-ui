import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './produto-detalhar.component.html'
})
export class ProdutoDetalharComponent implements OnInit {
  private id: any;

  constructor(activeRoute: ActivatedRoute) {
    this.id = activeRoute.snapshot.params.id;
  }

  ngOnInit() {
  }

}

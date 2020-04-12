import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/core/model';

@Component({
  templateUrl: './view-product.component.html'
})
export class ViewProductComponent implements OnInit {
  private id: any;
  private produto: Produto;

  constructor(activeRoute: ActivatedRoute) {
    this.id = activeRoute.snapshot.params.id;
  }

  ngOnInit() {
  }

}

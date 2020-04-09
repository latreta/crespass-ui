import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './view-product.component.html'
})
export class ViewProductComponent implements OnInit {
  private id: any;

  constructor(activeRoute: ActivatedRoute) {
    this.id = activeRoute.snapshot.params.id;
  }

  ngOnInit() {
  }

}

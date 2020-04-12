import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/model';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  templateUrl: './view-product.component.html'
})
export class ViewProductComponent implements OnInit {
  private id: any;
  private produto: Product;

  constructor(
    private activeRoute: ActivatedRoute,
    private productService: ProductService) {
  }

  ngOnInit() {
    this.id = this.activeRoute.snapshot.params.id;
    if(this.id) {
      this.getProduct(this.id);
    }
  }

  getProduct(id: number) {
    this.productService.getProductByID(id)
    .subscribe((data: Product) => {
      this.produto = data;
    }, err => console.log(err));
  }

}

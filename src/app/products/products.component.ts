import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import "rxjs/add/operator/switchMap";

interface Product {
  title: string;
  price: number;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  id: string;
  products: Product[] = [
    {
      title: 'Book',
      price: 10
    },
    {
      title: 'Pen',
      price: 2
    },
    {
      title: 'Pencil',
      price: 11
    }
  ];
  currProduct: Product;

  constructor(private route: ActivatedRoute, private location: Location) {
    // route.params.subscribe(params => {
    //   this.id = params['id'];
    //   this.currProduct = this.getProductById(this.id);
    // });
    route.paramMap.subscribe( params => {
      this.id = params.get('id');
      this.currProduct = this.getProductById(this.id);
    });
  }

  ngOnInit() {
  }

  getProductById(id: string): Product {
    if (id) {
      id = id.toLocaleLowerCase();
      return this.products.find( el => el.title.toLowerCase() === id );
    } else {
      return null;
    }
  }

  goBack() {
    this.location.back();
  }
}

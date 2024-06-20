import { Component, OnInit } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from "../card/card.component";
import { Product } from '../../modals/product.interface';

@Component({
    selector: 'app-product-carousel',
    standalone: true,
    templateUrl: './product-carousel.component.html',
    styleUrl: './product-carousel.component.scss',
    providers: [TitleCasePipe],
    imports: [CommonModule, FormsModule, CardComponent]
})

export class ProductCarouselComponent implements OnInit {
  products: Product[] = [];
  categories: string[] = [];
  categorizedProducts: { [key: string]: any[] } = {};

  constructor(private titleCasePipe: TitleCasePipe) { }

  async ngOnInit(): Promise<void> {
    await this.fetchProducts();
    this.categorizeProducts();
  }

  async fetchProducts(): Promise<void> {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    this.products = data.products;
    this.categories = [...new Set(this.products.map(product => product.category))];
  }

  categorizeProducts(): void {
    this.categories.forEach(category => {
      this.categorizedProducts[category] = this.products.filter(product => product.category === category);
    });
  }

  getTitleCase(category: string): string {
    return this.titleCasePipe.transform(category);
  }

}

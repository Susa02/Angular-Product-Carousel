import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCarouselComponent } from "./product-carousel/product-carousel.component";



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ProductCarouselComponent]
})
export class AppComponent {
  title = 'task2_productCarousel';
}

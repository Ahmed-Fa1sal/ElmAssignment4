import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';


@Component({
  selector: 'app-root',
  imports: [RouterModule, ProductFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce-app';
}

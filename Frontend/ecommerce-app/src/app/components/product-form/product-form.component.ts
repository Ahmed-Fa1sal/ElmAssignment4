import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { addProduct, updateProduct } from '../../store/product.actions';
import { Product } from '../../models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { selectProductById } from '../../store/product.selectors'; // Make sure to create a selector for getting product by id

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;
  isEditMode: boolean = false;  // To check if we're in edit mode
  productId: number | null = null;  // Store the product id if we're editing

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router,
    private route: ActivatedRoute  // Inject ActivatedRoute to get route params
  ) {
    this.productForm = this.fb.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    // Check if we're in edit mode
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.isEditMode = true;
        this.productId = +id;  // Ensure it's a number
        // Load the product data if we're in edit mode
        this.store.select(selectProductById(this.productId)).subscribe((product) => {
          if (product) {
            this.productForm.patchValue(product);  // Pre-fill the form with product data
          }
        });
      }
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      if (this.isEditMode) {
        // Update product
        this.store.dispatch(updateProduct({ product: { id: this.productId, ...this.productForm.value } }));
      } else {
        // Create new product
        this.store.dispatch(addProduct({ product: this.productForm.value }));
      }

      this.router.navigate(['/products']);
    }
  }
}

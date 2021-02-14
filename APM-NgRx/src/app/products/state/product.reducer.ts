/* NgRx */
import { createReducer, on, createAction } from '@ngrx/store';
import { Product } from '../product';
import * as AppState from '../../state/app.state';

// Extends the app state to include the product feature.
// This is required because products are lazy loaded.
// So the reference to ProductState cannot be added to app.state.ts directly.
export interface State extends AppState.State {
  products: ProductState;
}

// State for this feature (Product)
export interface ProductState {
  showProductCode: boolean;
  currentProduct: Product;
  products: Product[];
}

export const productReducer = createReducer<ProductState>(
  { showProductCode: true } as ProductState,
  on(createAction('[Product] Toggle Product Code'), (state): ProductState => {
    return {
      ...state,
      showProductCode: !state.showProductCode
      // showProductCode: state.showProductCode = false,
    };
  })
);


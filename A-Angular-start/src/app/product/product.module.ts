import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './product-details.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { StarComponent } from '../shared/star/star.component';
import { ConvertToSpacesPipePipe } from '../shared/convert-to-spaces-pipe.pipe';

@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductListComponent,
    StarComponent,
    ConvertToSpacesPipePipe,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailsComponent},
    ]),
    CommonModule,
  ],
})
export class ProductModule {}

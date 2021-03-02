import {NgModule} from '@angular/core';
import {ProductRepository} from './product.repository';
import {StaticDataSource} from './static.datasource';
import {Cart} from './cart.model';
import {Order} from './order.model';
import {OrderRepository} from '../store/order.repository';
import {HttpClientModule} from '@angular/common/http';
import {RestDatasource} from './rest.datasource';


@NgModule({
  imports: [HttpClientModule],
  providers: [ProductRepository, Cart, Order, OrderRepository,
    {provide: StaticDataSource, useClass: RestDatasource}]
})

export class ModelModule {
}

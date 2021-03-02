import {Injectable} from '@angular/core';
import {Order} from '../model/order.model';
import {StaticDataSource} from '../model/static.datasource';
import {Observable} from 'rxjs';

@Injectable()
export class OrderRepository {
  private orders: Order[] = [];
  constructor(private dataSource: StaticDataSource) {}
  getOrders(): Order[] {
    return this.orders;
  }
  saveOrder(order: Order): Observable<Order> {
    return this.dataSource.saveOrder(order);
  }
}

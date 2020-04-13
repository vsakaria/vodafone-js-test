import { ResponseObject } from './ProcessResponse';
import { Order, States } from './../../components/Orders';

const { SUCCESS } = States;

export const processOrder = (orders: Order[]): ResponseObject => {
    const output = { title: 'No orders processeed', message: null }

    for (let order of orders) {
        if (order.state === SUCCESS) {
            return { title: 'Order complete', message: null }
        }
    }

    return output;
}

import Buyable from './Buyable';

export default class Phone implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly price: number,
        quantity: number = 1
    ) { this.quantity = quantity }
}

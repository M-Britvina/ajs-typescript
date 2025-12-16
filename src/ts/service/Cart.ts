import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        const currentItem: Buyable | undefined = this.items.find(i => i.id === item.id);
        if (currentItem && 'quantity' in currentItem) { 
            currentItem.quantity += item.quantity;
        } else {
            this._items.push(item);
        }
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    calculateCost(): number {
        return this._items.reduce((sum, item) => sum + (('quantity' in item) ? (item.quantity * item.price) : item.price), 0)
    }

    calculateCostWithDiscount(discount: number): number {
        return this.calculateCost() * (1 - discount / 100);
    }

    remove(id: number): void {
        this._items = this._items.filter(item => item.id !== id);
    }

    decreaseQuantity(id: number): void {
        const currentItem: Buyable | undefined = this.items.find(i => i.id === id);
        if (currentItem && 'quantity' in currentItem && currentItem.quantity > 1) {
            currentItem.quantity--;
        } else {
            this.remove(id);
        }
    }
}
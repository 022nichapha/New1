"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shopping_Cart = void 0;
class Shopping_Cart {
    constructor(created) {
        this.lineItems = [];
        this.created = created;
        this.lineItems;
    }
    getcreated() {
        return this.created;
    }
    getLineItems() {
        return this.lineItems;
    }
    getaddLineItem(LineItem) {
        this.lineItems.push(LineItem);
    }
    toString() {
        return 'ShoppingCard[created=${this.created},Lineitem=${this.lineItem}]';
    }
}
exports.Shopping_Cart = Shopping_Cart;

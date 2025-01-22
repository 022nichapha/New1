"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
class Payment {
    constructor(id, paid, total, details) {
        this.id = id;
        this.paid = paid;
        this.total = total;
        this.details = details;
    }
    getid() {
        return this.id;
    }
    getpaid() {
        return this.paid;
    }
    gettotal() {
        return this.total;
    }
    getdetails() {
        return this.details;
    }
    setid(id) {
        this.id = id;
    }
    setpaid(paid) {
        this.paid = paid;
    }
    settotal(total) {
        this.total = total;
    }
    setdetails(details) {
        this.details = details;
    }
    toString() {
        return `Payment=[ID= ${this.id},Paid= ${this.paid},Total${this.total},Details=${this.details}]`;
    }
}
exports.Payment = Payment;

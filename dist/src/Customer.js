"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const Account_1 = require("./../Account");
class Customer {
    constructor(account, WebUser, id, address, phone, email) {
        this.account = Account_1.Account;
        this.WebUser = WebUser;
        this.id = id;
        this.address = address;
        this.phone = phone;
        this.email = email;
    }
    getId() {
        return this.id;
    }
    getAddress() {
        return this.address;
    }
    setAddress(address) {
        this.address = address;
    }
    getPhone() {
        return this.phone;
    }
    setPhone(phone) {
        this.phone = phone;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    getWebuser() {
        return this.WebUser;
    }
}
exports.Customer = Customer;

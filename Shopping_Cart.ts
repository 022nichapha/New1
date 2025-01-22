import { Lineitem } from './src/LineItem';
export class Shopping_Cart{
    private created: string
    private lineItems:Lineitem [] = []
    constructor (created: string){
        this.created = created
        this.lineItems
    }
    public getcreated():string{
        return this.created
    }
    public getLineItems(): Lineitem[] {
        return this.lineItems
    }
    public getaddLineItem(LineItem:Lineitem):void{
    this.lineItems.push(LineItem) 
    }
    public toString():string{
        return 'ShoppingCard[created=${this.created},Lineitem=${this.lineItem}]'
    }
}

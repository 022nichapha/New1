export class Payment{
    private id:string
    private paid:string
    private total:string
    private details:string

    constructor(
    id: string,
    paid: string,
    total: string,
    details: string
    )
    {
    this.id = id
    this.paid = paid
    this.total = total
    this.details = details
    }
    public getid():string{
        return this.id 
    }
    public getpaid():string{
        return this.paid
    }
    public gettotal():string{
        return this.total
    }
    public getdetails():string{
        return this.details
    }
    public setid(id:string):void{
        this.id = id 
    }
    public setpaid(paid:string):void{
        this.paid = paid
    }
    public settotal(total:string):void{
        this.total = total
    }
    public setdetails(details:string):void{
        this.details = details
    }
    public toString():string {
        return `Payment=[ID= ${this.id},Paid= ${this.paid},Total${this.total},Details=${this.details}]`
    }
}


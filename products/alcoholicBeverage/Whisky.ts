import { TaxProduct } from "../TaxProduct"

export class Whisky extends TaxProduct {
    constructor(description: string, price: number){
        super(description, price, 'Whisky')
    }

    getTax(): number {
        return 0.6
    }
}
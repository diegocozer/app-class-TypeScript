import { Cigar } from "../../products/Cigar";
import { IProduct } from "../../products/interfaces/product";
import { Product } from "../../products/Product";

export class ProductDB{
    productList: IProduct[] = []

    createNewProduct(newProduct: Product){
        this.productList.push(newProduct)
    }
    getProductById(productId:string): Product[]{
        return this.productList.filter(({id}) => productId === id)
    }
    getProductCategory(productCategory:string): Product[]{
        return this.productList.filter(({category}) => productCategory === category)

    }
    updateProduct(updateProduct:IProduct,id:string){
        this.productList.map(product => {
            if(id === product.id){
                product = updateProduct
            }
        })
    }
}

const dbInstance = new ProductDB()
const newProduct = new Cigar('Carlton', 10)

dbInstance.createNewProduct(newProduct)

const [currentProduct] = dbInstance.getProductById('10')
import { Product } from "@/pageContainers/product/Product";


// mock promise to get data
const getData = ():Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('data')
        }, 2000)
    })
}
export default async function ProductPage() {
    const data = await getData()
    
    return (
        <div>
        <h2>This is product page</h2>
        <div>{data}</div>
        <Product />
        </div>
       
    )
}
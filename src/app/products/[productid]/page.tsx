export default function ProductDetails({params}: {

    params: {productid: string}
}){
    return (
        <div>
            <h1>Details about Product {params.productid}</h1>
        </div>
    )
}
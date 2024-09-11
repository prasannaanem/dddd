import { notFound } from "next/navigation";

export default function ReviewDetaile({params} :{

    params: {
        productid: string
        reviewId: string
    };
}){


    if(parseInt(params.reviewId) > 1000){
        notFound();
    }
    return (
        <div>
            <h1>Review {params.reviewId} for Product {params.productid}</h1>
        </div>
    );
}
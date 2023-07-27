import products from "@/app/utils/mock"
import Style from "./kids.module.css"
import Link from "next/link"
const Kids = () => {
    const kidsProduct=products.filter((item)=>{
        return item.category==='kids'
    })
    const getData = (data: any) => {
        return (
            <div className={Style.card}>
                <Link href={`/products/${data.slug}`}>
                    <img src={data.image} alt={data.name} />
                    <h1 className={Style.Product_Name}>{data.name}</h1>
                    <h2 className={Style.Product_Type}>${data.cloth_Type}</h2>
                    <h3 className={Style.Product_Price}>${data.price}</h3>
                </Link>
            </div>
        )
    }
    return (
        <div className={Style.Products}>
            <div className={Style.Products_Content}>
                {kidsProduct.map(getData)}
            </div>
        </div>
    )
}
export default Kids
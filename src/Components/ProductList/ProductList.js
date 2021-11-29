import "./ProductList.css"
import { Card } from "../Card/Card"
export const ProductList = ({cardList}) => {
    return (
    <div className="pl">
        <div className="pl-texts">
            <h1 className="pl-title">This is my title</h1>
            <p className="pl-desc">This is my description</p>
        </div>
        <div className="pl-list">
            {cardList.map((item, index)=>(
                <Card img={item.img} key={index} link={item.link}/>
            ))}
        </div>
    </div>
    )
}
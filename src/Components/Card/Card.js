import "./Card.css"
export const Card = ({img, link}) => {
    return (
        <div className="c">
            <div className="c-browser">
                <div className="c-circle red"></div>
                <div className="c-circle yellow"></div>
                <div className="c-circle green"></div>
            </div>
            <a href={link}>
                <img src={img} className="c-img"></img>
            </a>
        </div>
    )
}
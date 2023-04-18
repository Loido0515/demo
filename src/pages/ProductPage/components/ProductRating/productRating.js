import LightStartIcon from "../../../../common/components/LightStarIcon/lightStartIcon";
import DarkStarIcon from "../../../../common/components/DarkStartIcon/darkStarIcon";
import './style.css'

function ProductRating({star}){
    const stars = [];
    for(let i = 1; i<= 5; i++){
        if(i <= star){
            stars.push(<LightStartIcon key={i} />)
        }else {
            stars.push(<DarkStarIcon key={i} />)
        }
    }
    return (
        <div className={"product__rated"}>
            {
                stars
            }
        </div>
    )
}


export default ProductRating;

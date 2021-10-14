import { useState, useEffect } from "react"
import '../../css/style.css'
import ItemListContainer from "../Cards/ItemListContainer"

export default function Swiper(){
    const [currentItemIndex,setCurrentItemIndex] = useState(0)
    const items = ["bg-danger","bg-info","bg-dark"]

    const handleLeftClick= () =>{
        console.log(items[currentItemIndex])
        currentItemIndex === 0 ? setCurrentItemIndex(items.length -1 ) : setCurrentItemIndex(currentItemIndex - 1)
    }
    const handleRightClick= () =>{
        console.log(currentItemIndex)
        currentItemIndex === 2 ? setCurrentItemIndex(0) : setCurrentItemIndex(currentItemIndex + 1)
    }

    const iconLeft = '<'
    const iconRight = '>'
    return(
        <div className="d-flex justify-content-evenly container-swiper">
            <button onClick={handleLeftClick} className="col-md-1 swiper-btn">{iconLeft}</button>
            <ItemListContainer query="ukelele"/>
            <button onClick={handleRightClick}className="col-md-1 swiper-btn">{iconRight}</button>
        </div>
    )
}
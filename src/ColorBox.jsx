import { useState } from "react"
import "./ColorBox.css"

export default function ColorBox({colors}){
    function randomChoice(){
        const indx = Math.floor(Math.random()*colors.length)
        return colors[indx]
    }
    
    const [color,setColor] = useState(randomChoice())
    const handleClick = () => {
        const randomColor = randomChoice()
       setColor(randomColor)
    }
    return(
        <div className="ColorBox" style = {{backgroundColor:color}} onClick={handleClick}>

        </div>
    )
}
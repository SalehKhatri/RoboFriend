import React from "react";
import Card from "./Card";


const CardList=({robots})=>{
   const CardsArray = robots.map((user,i)=>{
    return( <Card 
        key={i} 
        name={robots[i].name} 
        email={robots[i].email} 
        id={robots[i].id} />
    )
   })
    return(
        <div>
        {CardsArray}
        </div>
    )
        
    
    
};



export default CardList;
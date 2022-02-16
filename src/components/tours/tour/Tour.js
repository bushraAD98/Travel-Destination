import React from "react";

export default function Tours({tour}) {
    console.log(tour);
return(

<div className="tour" >
<h2>{tour.name}</h2>
<div className="tour.image">
<img src={tour.image}/>



</div>

</div>

);

}
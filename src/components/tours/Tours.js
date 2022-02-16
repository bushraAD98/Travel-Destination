
import { Link} from "react-router-dom";
import React from "react";
import Tour from "./tour/Tour.js";

export default function Tours({data}) {
   console.log(data);
  return (
    <>
      <h2>Our Blogs</h2>
      {
      data.map((element) => {
        
          <div className="tours" key={element.id}>
            <Link to ={'/tour/${tour.id}'}> 
              <Tour tour={data}/>
             </Link> 
                 </div>
        
      })
      }
    </>
  );
}



// <p>{element.name}</p>
// <img src={element.image} alt={element.name} />
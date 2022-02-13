



export default function Tours(props){
    console.log(props.toursData);
    return(
   <>
    <h2>Our Tours</h2> 
   {
props.toursData.map(data =>{
return(
<div key={data.id}>
<p>{props.data.name}</p>
<img src={props.data.image}/>
</div>
)
})


   }
   </>
    )
    }
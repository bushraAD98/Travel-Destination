import Header from "../header/Header.js";
import Footer from "../footer/Footer.js";
import Tours from "../tours/Tours.js";


export default function Home(props){
    console.log(props.data);
return (
<>
<Header/>
<Footer/>
{
<Tours/> 
}
</>
)

}


import photo from "../assets/photo-removebg-preview.png"
import "./home.css"
// import Button from "../components/button";

function HomePage() {
    // const hello: string = "Hello World";
    return(
        // <div>
        //       <h1 style ={{color: 'orange'}}>{hello}</h1>
        //       <Button></Button>
        // </div>
        <div className="Body">
            <img alt="photo" src={photo}/>
            <div className="text">
                <div className="greet">
                <h1>Hello !</h1>
                </div>
                <div className="Paragraph">
                <p>I'm Shoose,<br/ > a Web Developer</p>
            </div>
            </div>    
        </div>
    )
}

export default HomePage
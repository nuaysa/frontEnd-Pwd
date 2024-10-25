import "./styles.css";
// import photo from "../src/assets/Akhdut.png";
// import photo1 from "../src/assets/photo-removebg-preview.png";
// import spider from "../src/assets/spider.png"
import ISTP from "../src/assets/ISTP.png";
import whatsapp from "../src/assets/whatsapp-logo.png"
import instagram from "../src/assets/instagram-logo.png"
import mail from "../src/assets/mail.png"
import { TypeAnimation } from "react-type-animation";

function App() {
  return (
    <div>
      <div className="flex justify-center items-center gap-9 bg-white h-[10vh] text-[20px] text-slate-900 font-semibold  w-[100%] fixed outline-dashed outline-amber-500 scroll-mb-16 z-10">
        <a href="#home" className="hover:text-amber-500">Home</a>
        <a href="#about" className="hover:text-amber-500">About</a>
        <a href="#contact" className="hover:text-amber-500">Contact</a>
      </div>
      <div className="bg-amber-500 h-[100vh] w-[100%] flex items-center justify-center gap-10 px-20 pt-[10vh] m-0 sm:flex-col" id="home">
        <div>
          <img src={ISTP} className="h-[300px] w-[300px] rounded-full outline-dotted bg-white  hover:animate-spin delay-75" />
        </div>
        <div className="items-center ">
          <h1 className=" bg-white w-[500px] h-20 font-semibold text-[50px] px-9">Hello !</h1>
          <div className="mt-0">
            <p className="text-[30px] font-extralight pt-3"> I'm A Fullstack web developer</p>
          </div>
        </div>
      </div>
      <div className="bg-white h-[100vh] flex-col justify-center pt-16"  id="about">
      <h1 className="text-center text-[70px] text-white font-semibold bg-amber-500 mt-28 mx-96">About Me</h1>
        <div className="mt-20 text-center text-[20px] font-medium">
          <p >
            Hi, I'm Aysa! As you can see on the home page, I'm an ISTP person
            <br /> who's currently learning about web development at Purwadhika Digital School.
            <br /> I enjoy reading mystery novels and other fiction books besides of learning,
            <br /> and I’m a fresh graduate from high school.
          </p>
          <p className="mt-16">
            Background I started my journey in web development when I was in high school.
            <br /> Since then, I've been continuously exploring and learning more about this exciting field.
          </p>
        </div>
      </div>
      <div className="bg-amber-500 h-[90vh] py-11" id="contact">
      <h1 className="text-center text-[70px] text-amber-500 font-semibold bg-white mx-96 mt-28">Contact Me</h1>
      <div className="bg-white w-96 rounded-lg outline-dotted outline-black flex gap-24 mt-28 mx-[570px] p-6">
        <a href="https://wa.link/gk7h9s">
          <img src={whatsapp} className='w-[50px]'></img>
          </a>
          <a href="https://www.instagram.com/an_nvd/">
        <img src={instagram} className='w-[50px]'></img>
          </a>
          <a href="">
        <img src={mail} className='w-[50px]'/><p></p>
          </a>
          
      </div>
      </div> 
      <TypeAnimation
        sequence ={[
          'Thanks for  visiting my website!', 1000,
          'See you next time!', 1000,
        ]}
        wrapper="span"
        speed={50}
        style={{fontSize: '2em', fontFamily:'monospace', display: 'inline-block'}}
        repeat={Infinity}
      />
    </div>
  );
}

export default App
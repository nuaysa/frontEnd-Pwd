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
      {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> */}
      <div className="flex justify-center items-center gap-9 bg-white h-[10vh] text-[20px] text-slate-900 font-semibold mb-40 w-[100%] fixed outline-dashed outline-amber-500 scroll-mb-16 z-10">
        <a href="#home" className="hover:text-amber-500">Home</a>
        <a href="#about" className="hover:text-amber-500">About</a>
        <a href="#contact" className="hover:text-amber-500">Contact</a>
      </div>
      <div className="bg-amber-500 h-[100vh] w-[100%] flex-col items-center justify-center px-20 pt-[10vh] md:flex" id="home">
        <div>
          <img src={ISTP} className="w-[300px] mb-[20px] mt-24 rounded-full outline-dotted justify-items-center bg-white hover:animate-spin delay-75 md:h-[300px] md:w-[300px]" />
        </div>
        <div className="items-center flex-1">
          <h1 className=" bg-white font-semibold text-[40px] text-center md:text-[50px] md:px-9 md:w-[500px] md:h-20 md:text-start">Hello !</h1>
          <div >
            <p className="font-extralight pt-3 text-center text-[30px] md:text-[30px]"> I'm A Fullstack web developer</p>
          </div>
        </div>
      </div>
      <div className="bg-white h-[100vh] py-11" id="about">
      <h1 className="text-center text-[30px] mt-40 mx-11 text-white font-semibold bg-amber-500 md:mt-28 md:mx-96 md:text-[50px] md:text-center">About Me</h1>
        <div className=" text-center text-[15px] mx-4 mt-16 font-medium md:mt-20 md:text-[20px]">
          <p >
            Hi, I'm Aysa! As you can see on the home page, I'm an ISTP person
            <br /> who's currently learning about web development at Purwadhika Digital School.
            <br /> I enjoy reading mystery novels and other fiction books besides of learning,
            <br /> and I’m a fresh graduate from high school.
          </p>
          <p className="mt-16">
            I started my journey in web development when I was in high school.
            <br /> Since then, I've been continuously exploring and learning more about this exciting field.
          </p>
        </div>
      </div>
      <div className="bg-amber-500 h-[90vh] py-11" id="contact">
      <h1 className="text-center text-amber-500 text-[30px] font-semibold bg-white mt-40 mx-11 md:mx-96 md:mt-28 md:text-[70px] ">Contact Me</h1>
      <div className="bg-white rounded-lg outline-dotted outline-black flex gap-24 mt-28 mx-8 md:w-96 md:mt-28 md:mx-[570px] p-6">
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
        speed={40}
        style={{fontSize: '2em', fontFamily:'monospace', textAlign: "center", backgroundColor: "rgb(245 158 11)", color: "white"}}
        repeat={Infinity}
      />
    </div>
  );
}

export default App
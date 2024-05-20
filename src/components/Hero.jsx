import { RiMapPinLine } from "react-icons/ri";
import { CiCircleChevRight } from "react-icons/ci";
import {
  FaArrowRight,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiBrightnessUp } from "react-icons/ci";
import Footer from "./Footer";


const Hero = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="flex items-center gap-2 mb-10 text-gray-400">
              <RiMapPinLine className="text-xl " />
              AGADIR
            </h1>
            <h1 className="title-font sm:text-7xl font-bold text-3xl mb-4  text-blue-500 leading-relaxed tracking-wider">
              Hello,I'm <br /> Elboka Jiniore
            </h1>
            <p className="mb-8 text-lg tracking-wide  ">
              A digital designer with over 10 years' experience in the creative
              industry. From a young age, I was captivated by the intersection
              of technology and art, and that passion has been the driving force
              behind my career.
            </p>
            <div className="flex flex-col lg:flex-row  items-center gap-3 ">
              <button className="flex items-center gap-2 text-gray-500 px-8 py-3">
                Get in Touch{" "}
                <CiCircleChevRight className="font-bold  text-3xl" />{" "}
              </button>

              <div className="flex items-center gap-4 mt-2 lg:mt-1">
              <button className="p-3 rounded-full">
                <FaXTwitter />
              </button>
              <button className="p-3 rounded-full">
                <FaGithub />
              </button>
              <button className="p-3 rounded-full">
                <FaLinkedinIn />
              </button>
              <button className="p-3 rounded-full">
                <FaWhatsapp />
              </button>
              </div>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <div className="avatar ">
              <div className="rounded-full border-8 border-white shadow-md">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen">
  <main className="px-5 sm:px-10 md:px-20 lg:px-20 py-10">
    <h1 className="text-blue-500 text-4xl sm:text-5xl md:text-6xl font-bold mb-10 sm:mb-20">What I Do</h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="border px-5 sm:px-10 py-10 sm:py-20 flex flex-col items-center justify-center rounded-3xl shadow-lg hover:scale-105 transition-all">
        <h1 className="text-blue-500 font-bold text-4xl sm:text-5xl mb-3 sm:mb-5">
          <FaLaptopCode />
        </h1>
        <h1 className="text-2xl sm:text-3xl mb-2 sm:mb-3 text-blue-500">Coding</h1>
        <p className="text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
          necessitatibus nostrum commodi, numquam et deleniti voluptatibus
          hic.
        </p>
      </div>
      <div className="border px-5 sm:px-10 py-10 sm:py-20 flex flex-col items-center justify-center rounded-3xl shadow-lg hover:scale-105 transition-all">
        <h1 className="text-blue-500 font-bold text-4xl sm:text-5xl mb-3 sm:mb-5">
          <FaLaptopCode />
        </h1>
        <h1 className="text-2xl sm:text-3xl mb-2 sm:mb-3 text-blue-500">Coding</h1>
        <p className="text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
          necessitatibus nostrum commodi, numquam et deleniti voluptatibus
          hic.
        </p>
      </div>
      <div className="border px-5 sm:px-10 py-10 sm:py-20 flex flex-col items-center justify-center rounded-3xl shadow-lg hover:scale-105 transition-all">
        <h1 className="text-blue-500 font-bold text-4xl sm:text-5xl mb-3 sm:mb-5">
          <FaLaptopCode />
        </h1>
        <h1 className="text-2xl sm:text-3xl mb-2 sm:mb-3 text-blue-500">Coding</h1>
        <p className="text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
          necessitatibus nostrum commodi, numquam et deleniti voluptatibus
          hic.
        </p>
      </div>
    
      
    </div>
  </main>
</section>

<section className="min-h-screen">
  <main className="px-5 sm:px-10 md:px-20 lg:px-20 py-10">
    <h1 className="text-blue-500 text-4xl sm:text-5xl md:text-6xl font-bold mb-10 sm:mb-20">Selected Work</h1>

    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="border px-5 sm:px-10  py-10 flex flex-col  justify-center rounded-3xl shadow-lg overflow-hidden ">
        <img src="https://assets-global.website-files.com/661055fa7b25aef49f1c68ac/661158264384e51f6127eee4_project-image-01-p-800.webp" className="rounded-2xl hover:scale-105 transition-all" alt="" />
        <h1 className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, sint atque at quae, veniam dolor, accusantium laborum minus fugiat possimus animi culpa quam? Voluptatum ex cum aliquam iusto, quasi aliquid?</h1>
        <Link className="flex mt-5 items-center gap-2 hover:gap-4 transition-all text-blue-400 ">See more <FaArrowRight /> </Link>
      </div>
      <div className="border px-5 sm:px-10  py-10 flex flex-col  justify-center rounded-3xl shadow-lg overflow-hidden ">
        <img src="https://assets-global.website-files.com/661055fa7b25aef49f1c68ac/661158264384e51f6127eee4_project-image-01-p-800.webp" className="rounded-2xl hover:scale-105 transition-all" alt="" />
        <h1 className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, sint atque at quae, veniam dolor, accusantium laborum minus fugiat possimus animi culpa quam? Voluptatum ex cum aliquam iusto, quasi aliquid?</h1>
        <Link className="flex mt-5 items-center gap-2 hover:gap-4 transition-all text-blue-400 ">See more <FaArrowRight /> </Link>
      </div>
      <div className="border px-5 sm:px-10  py-10 flex flex-col  justify-center rounded-3xl shadow-lg overflow-hidden ">
        <img src="https://assets-global.website-files.com/661055fa7b25aef49f1c68ac/661158264384e51f6127eee4_project-image-01-p-800.webp" className="rounded-2xl hover:scale-105 transition-all" alt="" />
        <h1 className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, sint atque at quae, veniam dolor, accusantium laborum minus fugiat possimus animi culpa quam? Voluptatum ex cum aliquam iusto, quasi aliquid?</h1>
        <Link className="flex mt-5 items-center gap-2 hover:gap-4 transition-all text-blue-400 ">See more <FaArrowRight /> </Link>
      </div>
      <div className="border px-5 sm:px-10  py-10 flex flex-col  justify-center rounded-3xl shadow-lg overflow-hidden ">
        <img src="https://assets-global.website-files.com/661055fa7b25aef49f1c68ac/661158264384e51f6127eee4_project-image-01-p-800.webp" className="rounded-2xl hover:scale-105 transition-all" alt="" />
        <h1 className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, sint atque at quae, veniam dolor, accusantium laborum minus fugiat possimus animi culpa quam? Voluptatum ex cum aliquam iusto, quasi aliquid?</h1>
        <Link className="flex mt-5 items-center gap-2 hover:gap-4 transition-all text-blue-400 ">See more <FaArrowRight /> </Link>
      </div>
    
    
      
    </div>
  </main>
</section>

<section className="py-10 sm:py-20 px-5 sm:px-10 lg:px-20">
  <main className="border px-10 sm:px-20 py-10 sm:py-20 flex items-center justify-center flex-col rounded-3xl shadow-xl bg-gray-100">
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-500 mb-3 sm:mb-5 "><CiBrightnessUp /></h1>
    <h1 className="text-5xl sm:text-6xl lg:text-7xl text-center text-blue-500 font-bold mb-5 sm:mb-10">Let's create something amazing <br class="sm:hidden" /> together</h1>
    <button className="flex items-center gap-2 px-8 sm:px-10 py-3">
      Elboka@erick.com <CiCircleChevRight className="text-2xl sm:text-3xl" />
    </button>
  </main>
</section>

<Footer />
    </>
  );
};

export default Hero;

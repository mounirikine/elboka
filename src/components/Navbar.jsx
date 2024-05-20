import { RiMenuLine } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation()



  
  return (
    <header className="py-4 md:py-6 z-[99999999999999999999999]">
      <nav className="flex items-center justify-between px-4 md:px-8 lg:px-16 xl:px-20">
        <div className="w-1/2 md:w-1/3 lg:w-1/4">
          <Link to="/" className="text-blue-500 font-bold text-3xl md:text-3xl lg:text-3xl">LBOKA</Link>
        </div>
        <div className="hidden md:block md:w-2/3 lg:w-4/12">
          <ul className="flex items-center justify-around space-x-6 text-lg text-gray-400">
            <a className={`${location.pathname == "/" ? "text-blue-500" : ""}`}  href="/">Home</a>
            <a className={`${location.pathname == "/work" ? "text-blue-500" : ""}`} href="/work">Work</a>
            <a className={`${location.pathname == "/about" ? "text-blue-500" : ""}`} href="/about">About</a>
            <a className={`${location.pathname == "/contact" ? "text-blue-500" : ""}`} href="/contact">Contact</a>
          </ul>
        </div>
        <div className=" block md:hidden drawer w-2/12 z-[99999]">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <label htmlFor="my-drawer" className="btn bg-blue-500 border-none "><RiMenuLine className='text-white text-xl' /> </label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-blue-600 text-white">
      <h1 className='text-3xl font-bold px-2 py-5 '>Lboka</h1>
      <ul className="flex items-center flex-col justify-around mt-32 gap-3 text-lg text-gray-400">
            <a className={`${location.pathname == "/" ?        "bg-white w-full text-center py-2 rounded-full text-black text-xl" : " w-full text-center text-white text-xl "}`}  href="/">Home</a>
            <a className={`${location.pathname == "/work" ?    "bg-white w-full text-center py-2 rounded-full text-black text-xl" : " w-full text-center text-white text-xl "}`} href="/work">Work</a>
            <a className={`${location.pathname == "/about" ?   "bg-white w-full text-center py-2 rounded-full text-black text-xl" : " w-full text-center text-white text-xl "}`} href="/about">About</a>
            <a className={`${location.pathname == "/contact" ? "bg-white w-full text-center py-2 rounded-full text-black text-xl" : " w-full text-center text-white text-xl "}`} href="/contact">Contact</a>
          </ul>
    </ul>
  </div>
</div>
      </nav>
    </header>
  );
};

export default Navbar;

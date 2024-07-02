import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="w-full flex flex-row justify-center items-center h-[88px]">
      <div className="flex flex-start  justify-center items-center ">
        <img src={logo} alt="logo" className="w-[114px] h-[52px] " />
        <div className="flex flex-row  justify-center items-center w-[512px] gap-5 ">
          <a href="#feature">Features</a>
          <a href="#Integration">Integration</a>
          <a href="#stories">Customer Stories</a>
          <a href="#pricing">Pricing</a>
          <a href="#resources">Resources</a>
        </div>
      </div>
      <div>
        <div className="flex flex-row  justify-center items-center gap-3 ">
          <a href="#productdemo">Product Demo</a>
          <a href="#login">Log In</a>
          <button className=" bg-transparent text-blue-700 rounded-lg shadow-lg  w-[172px] h-[48px]">
            SCHEDULE A DEMO
          </button>
          <button className="  bg-blue-800 text-white rounded-lg shadow-lg w-[171px] h-[48px]">
            SIGN UP FOR FREE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

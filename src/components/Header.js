
const Header = () => {
    return (
      <div className="w-full flex p-1 border-b-4 border-white shadow-lg" style={{backgroundColor : "#f0f0f2"}}>
        <div className="w-[20%] flex px-6 items-center">
          <img
            className="invert w-[20%]"
            src="https://statics.olx.in/external/base/img/cartrade/logo/olx.svg?v=1"
            alt="Logo"
          />
          <input
            className="w-[80%] mx-3 h-12 py-2 px-6 border-2 rounded-sm"
            style={{
              borderColor: "#002f34",
              borderWidth: "2px",
              borderStyle: "solid",
            }}
            type="text"
            placeholder="India"
          />
        </div>
        <div className="w-[60%] flex items-center">
          <input
            className="w-[96%] h-12 p-2 border-2 rounded-l-sm"
            style={{
              borderColor: "#002f34",
              borderWidth: "2px",
              borderStyle: "solid",
            }}
            type="text"
            placeholder="Find Cars. Mobile Phones and more...."
          />
          <button className="w-[4%] h-12 rounded-r-sm px-6 flex justify-center items-center" style={{
              backgroundColor: "#002f34"
            }}>🔍</button>
        </div>
        <div className="w-[20%] flex px-3 items-center justify-around">
          <h4 className="font-semibold text-lg" style={{
              color: "#002f34"
            }}>English</h4>
          <button className="font-semibold text-lg hover:underline" style={{
              color: "#002f34"
            }}>Login</button>
          <button className="font-semibold text-lg rounded-2xl border-4  py-2 px-6" style={{
              color: "#002f34",
              borderColor: "#002f34"
            }}>
            + Sell
          </button>
        </div>
      </div>
    );
  };
  
  export default Header;
  
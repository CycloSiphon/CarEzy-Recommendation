import React from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";

const IndexDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        Services
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          Services
        </span>
        <div className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="http://localhost:5001/login"
                  target="_blank"
                >
                  <i className="text-blueGray-400 fab  text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2"></span>
                RENTAL</a>
              </div>
        {/* <a href="#"  
    onclick="window.open(`${window.location.hostname}:5001/login`)">
    Link to some other port on the same host
  </a> */}
        {/* <a href="/other/" onmouseover="javascript:event.target.port=5001">Look at another port</a> */}
      {/* <a href="' + window.location.protocol + '//' + window.location.hostname + ':5001' + window.location.pathname + '" >Link to same page on port 8080:</a>; */}
        
        {/* <a href="#" onclick="javascript:window.location.port=5001">go</a> */}
        {/* < Link onclick={javascript:event.target.port=5001} >
          Look at another port
          </Link> */}
        {/* <Link
          to="http://192.168.0.121:5001/login"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Rental

      
        </Link> */}
      </div>
    </>
  );
};

export default IndexDropdown;

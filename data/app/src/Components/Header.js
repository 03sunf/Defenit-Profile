import React, { Component } from "react";
import Logo from "../Images/Logo.png";
import "../Styles/App.css";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="md:flex md:-mx-4">
          <div className="md:w-10/12 xl:w-8/12 md:px-4 text-center md:mx-auto">
            <img
              src={Logo}
              className="logo-animation"
              style={{
                width: "160",
                height: "160",
                radius: "50%",
                margin: "auto",
              }}
            />
            <a
              href="javascript:alert('test')"
              className="text-gray-900 rounded py-1 px-8 hover:bg-pink-800 hover:text-white transition-colors duration-500 inline-block mt-2"
            >
              All Members
            </a>
            <a
              href="javascript:alert('test')"
              className="text-gray-900 rounded py-1 px-8 hover:bg-purple-700 hover:text-white transition-colors duration-500 inline-block mt-8"
            >
              Pwnable
            </a>
            <a
              href="javascript:alert('test')"
              className="text-gray-900 rounded py-1 px-8 hover:bg-pink-800 hover:text-white transition-colors duration-500 inline-block mt-8"
            >
              Web
            </a>
            <a
              href="javascript:alert('test')"
              className="text-gray-900 rounded py-1 px-8 hover:bg-purple-700 hover:text-white transition-colors duration-500 inline-block mt-8"
            >
              Reversing
            </a>
            <a
              href="javascript:alert('test')"
              className="text-gray-900 rounded py-1 px-8 hover:bg-pink-800 hover:text-white transition-colors duration-500 inline-block mt-8"
            >
              Crypto
            </a>
            <a
              href="http://defenit.kr"
              className="text-gray-900 rounded py-1 px-8 hover:bg-purple-700 hover:text-white transition-colors duration-500 inline-block mt-8"
            >
              Blog
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

import React, { Component } from "react";
import Logo from "../Images/Logo.png";
import "../Styles/App.css";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="md:flex md:-mx-4">
          <div className="md:w-10/12 xl:w-8/12 md:px-4 text-right md:mx-auto">
            <img
              src={Logo}
              className="logo-animation mt-4"
              style={{
                width: "180",
                height: "180",
              }}
            />
            <a
              href="javascript:alert('test')"
              className="text-gray-900 rounded py-1 px-8 hover:bg-pink-800 hover:text-white transition-colors duration-500 inline-block"
            >
              All Members
            </a>
            <a
              href="javascript:alert('test')"
              className="text-gray-900 rounded py-1 px-8 hover:bg-purple-700 hover:text-white transition-colors duration-500 inline-block"
            >
              Pwnable
            </a>
            <a
              href="javascript:alert('test')"
              className="text-gray-900 rounded py-1 px-8 hover:bg-pink-800 hover:text-white transition-colors duration-500 inline-block"
            >
              Web
            </a>
            <a
              href="javascript:alert('test')"
              className="text-gray-900 rounded py-1 px-8 hover:bg-purple-700 hover:text-white transition-colors duration-500 inline-block"
            >
              Reversing
            </a>
            <a
              href="javascript:alert('test')"
              className="text-gray-900 rounded py-1 px-8 hover:bg-pink-800 hover:text-white transition-colors duration-500 inline-block"
            >
              Crypto
            </a>
            <a
              href="http://defenit.kr"
              className="text-gray-900 rounded py-1 px-8 hover:bg-purple-700 hover:text-white transition-colors duration-500 inline-block"
            >
              Blog
            </a>
            <a
              href="http://defenit.kr"
              className="text-gray-900 rounded py-1 px-8 hover:bg-pink-800 hover:text-white transition-colors duration-500 inline-block"
            >
              Test1
            </a>
            <a
              href="http://defenit.kr"
              className="text-gray-900 rounded py-1 px-8 hover:bg-purple-700 hover:text-white transition-colors duration-500 inline-block"
            >
              Test2
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

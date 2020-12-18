import React, { Component } from "react";
import Logo from "../Images/Logo.png";
import "../Styles/App.css";

class Header extends Component {
  constructor(props) {
    super(props);

    this.selectall = () => {
      this.props.select("all");
    };

    this.selectpwn = () => {
      this.props.select("pwn");
    };

    this.selectweb = () => {
      this.props.select("web");
    };

    this.selectreversing = () => {
      this.props.select("reversing");
    };

    this.selectcrypto = () => {
      this.props.select("crypto");
    };
  }

  render() {
    return (
      <div>
        <div className="md:flex md:-mx-4">
          <div className="md:w-10/12 xl:w-8/12 md:px-4 text-right md:mx-auto">
            <img
              src={Logo}
              alt="logo"
              className="logo-animation mt-4"
              style={{
                width: "180",
                height: "180",
              }}
            />
            <a
              href="# "
              className="text-gray-900 rounded py-1 px-8 hover:bg-pink-800 hover:text-white transition-colors duration-500 inline-block"
              onClick={this.selectall.bind(this)}
            >
              All Members
            </a>
            <a
              href="# "
              className="text-gray-900 rounded py-1 px-8 hover:bg-purple-700 hover:text-white transition-colors duration-500 inline-block"
              onClick={this.selectpwn.bind(this)}
            >
              Pwnable
            </a>
            <a
              href="# "
              className="text-gray-900 rounded py-1 px-8 hover:bg-pink-800 hover:text-white transition-colors duration-500 inline-block"
              onClick={this.selectweb.bind(this)}
            >
              Web
            </a>
            <a
              href="# "
              className="text-gray-900 rounded py-1 px-8 hover:bg-purple-700 hover:text-white transition-colors duration-500 inline-block"
              onClick={this.selectreversing.bind(this)}
            >
              Reversing
            </a>
            <a
              href="# "
              className="text-gray-900 rounded py-1 px-8 hover:bg-pink-800 hover:text-white transition-colors duration-500 inline-block"
              onClick={this.selectcrypto.bind(this)}
            >
              Crypto
            </a>
            <a
              href="http://defenit.kr"
              className="text-gray-900 rounded py-1 px-8 hover:bg-purple-700 hover:text-white transition-colors duration-500 inline-block"
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

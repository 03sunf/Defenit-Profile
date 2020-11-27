import React, { Component } from "react";
import Tooltip from "./Tooltip";
import "../Styles/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

class Members extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.update();
  }

  update = () => {
    this.setState({ members: this.props.members });
  };

  render() {
    const list = this.props.members.map((group, key) => {
      return (
        <div className="container mx-auto px-4" key={key}>
          <div className="md:flex md:-mx-4 md:mt-12 md:mb-6 team-list">
            <div className="md:w-1/3 md:px-4 mt-10 md:mt-0">
              <div className="px-5 py-12 text-center">
                <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                  <Tooltip tooltip={group[0].message}>
                    <img
                      src={group[0].image}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                    />
                  </Tooltip>
                </div>
                <h5 className="mt-4 mb-1 text-xl font-medium">
                  <a href={group[0].homepage}>{group[0].name}</a>
                </h5>
                <span className="text-sm text-pink-800 font-medium uppercase">
                  {group[0].jobs}
                </span>
              </div>
              <a
                href="#"
                className="text-xl text-gray-600 text-center py-3 flex-grow hover:text-blue-700 transition-colors duration-300"
              >
                <span className="fab fa-linkedin-in"></span>
              </a>
              <a
                href="#"
                className="text-xl text-gray-600 text-center py-3 flex-grow hover:text-indigo-600 transition-colors duration-300"
              >
                <span className="fab fa-behance"></span>
              </a>
              <a
                href="#"
                className="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300"
              >
                <span className="fab fa-dribbble"></span>
              </a>
            </div>
            <div className="md:w-1/3 md:px-4 mt-10 md:mt-0">
              <div className="px-5 py-12 text-center">
                <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                  <Tooltip tooltip={group[1].message}>
                    <img
                      src={group[1].image}
                      alt="profile image"
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                  </Tooltip>
                </div>
                <h5 className="mt-4 mb-1 text-xl font-medium">
                  <a href={group[1].homepage}>{group[1].name}</a>
                </h5>
                <span className="text-sm text-pink-800 font-medium uppercase">
                  {group[1].jobs}
                </span>
              </div>
              <a
                href="#"
                className="text-xl text-gray-600 text-center py-3 flex-grow hover:text-blue-700 transition-colors duration-300"
              >
                <span className="fab fa-linkedin-in"></span>
              </a>
              <a
                href="#"
                className="text-xl text-gray-600 text-center py-3 flex-grow hover:text-indigo-600 transition-colors duration-300"
              >
                <span className="fab fa-behance"></span>
              </a>
              <a
                href="#"
                className="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300"
              >
                <span className="fab fa-dribbble"></span>
              </a>
            </div>
            <div className="md:w-1/3 md:px-4 mt-10 md:mt-0">
              <div className="px-5 py-12 text-center">
                <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                  <Tooltip tooltip={group[2].message}>
                    <img
                      src={group[2].image}
                      alt="profile image"
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                  </Tooltip>
                </div>
                <h5 className="mt-4 mb-1 text-xl font-medium">
                  <a href={group[2].homepage}>{group[2].name}</a>
                </h5>
                <span className="text-sm text-pink-800 font-medium uppercase">
                  {group[2].jobs}
                </span>
              </div>
              <a
                href="#"
                className="text-xl text-gray-600 text-center py-3 flex-grow hover:text-blue-700 transition-colors duration-300"
              >
                <span className="fab fa-linkedin-in"></span>
              </a>
              <a
                href="#"
                className="text-xl text-gray-600 text-center py-3 flex-grow hover:text-indigo-600 transition-colors duration-300"
              >
                <span className="fab fa-behance"></span>
              </a>
              <a
                href="#"
                className="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300"
              >
                <span className="fab fa-dribbble"></span>
              </a>
            </div>
            <div className="md:w-1/3 md:px-4 mt-10 md:mt-0">
              <div className="px-5 py-12 text-center">
                <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                  <Tooltip tooltip={group[3].message}>
                    <img
                      src={group[3].image}
                      alt="profile image"
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                  </Tooltip>
                </div>
                <h5 className="mt-4 mb-1 text-xl font-medium">
                  <a href={group[3].homepage}>{group[3].name}</a>
                </h5>
                <span className="text-sm text-pink-800 font-medium uppercase">
                  {group[3].jobs}
                </span>
              </div>
              <a
                href="#"
                className="text-xl text-gray-600 text-center py-3 flex-grow hover:text-blue-700 transition-colors duration-300"
              >
                <span className="fab fa-linkedin-in"></span>
              </a>
              <a
                href="#"
                className="text-xl text-gray-600 text-center py-3 flex-grow hover:text-indigo-600 transition-colors duration-300"
              >
                <span className="fab fa-behance"></span>
              </a>
              <a
                href="#"
                className="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300"
              >
                <span className="fab fa-dribbble"></span>
              </a>
            </div>
          </div>
        </div>
      );
    });
    return <div>{list}</div>;
  }
}

export default Members;

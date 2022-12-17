import React, { Fragment, useState } from "react";
import useLocalStorage from "use-local-storage";
import { Disclosure } from "@headlessui/react";
/* import foxLogoDark from "../assets/images/foxLogo-dark.png"
import foxLogoLight from "../assets/images/foxLogo.png" */
import { Link } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import "../index.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Works", href: "/works", current: false },
  { name: "Skills", href: "/skills", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [dark, setDark] = useLocalStorage("dark", false);
  const [toggleButton, setToggleButton] = useState(false);

  const handleToggle = () => {
    setToggleButton(!toggleButton);
  };

  const toggleDark = () => {
    setDark(!dark);
    if (dark) {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  };

  return (
    <Disclosure as="nav" className="bg-[#141414] dark:bg-[#FFFAF0]">
      {({ open }) => (
        <>
          <div className="col-md-12 col-lg-12 col-xl-10 mx-auto">
            <div className="px-3 py-1  d-flex align-items-center justify-content-between">
              <div className="d-sm-none">
                {/* Mobile menu button*/}
                <Disclosure.Button className="btn btn-dark text-white d-flex fs-3">
                  {open ? <AiOutlineClose /> : <AiOutlineMenu />}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="d-none d-sm-block">
                  <div className="d-flex">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? " text-white text-decoration-none"
                            : "text-white text-decoration-none",
                          "px-4 py-2 mx-3 rounded thumbnail"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className=" d-flex align-items-center pr-3">
                <button
                  onClick={handleToggle}
                  className="btn btn-dark text-white d-flex fs-3"
                >
                  {toggleButton ? (
                    <MdDarkMode onClick={toggleDark} />
                  ) : (
                    <MdLightMode onClick={toggleDark} />
                  )}
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="d-sm-none">
            <div className="px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "text-white d-flex text-decoration-none justify-content-center"
                      : "text-white d-flex text-decoration-none justify-content-center",
                    "px-3 py-2 rounded text-decoration-none thumbnail"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

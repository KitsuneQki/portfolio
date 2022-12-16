import React from "react"
import Contact from "../components/Contact"
import { DiJavascript1 } from "react-icons/di"
import { IoLogoHtml5, IoLogoCss3, IoLogoNodejs } from "react-icons/io"
import { FaReact } from "react-icons/fa"
import {
  SiTailwindcss,
  SiNextdotjs,
  SiChakraui,
  SiMaterialui,
  SiStyledcomponents,
} from "react-icons/si"

const Skills = () => {
  return (
    <div>
      <div className="bg-[#141414] h-full text-start justify-center flex dark:bg-[#fcf9df]">
        <div className="w-[90vh] text-gray-300 dark:text-[#141414]">
          <div className=" text-start justify-start p-6">
            <h1 className="text-2xl font-bold pt-10">Skills</h1>
          </div>
          <div className="pl-8 py-4">
            <h1 className="font-bold text-xl py-4">Languages</h1>
            <div className="flex">
              <p className="pl-4 py-2 px-4">
                <DiJavascript1 className="w-[40px] h-auto" />
              </p>
              <p className="pl-4 py-2 px-4">
                <IoLogoHtml5 className="w-[40px] h-auto" />
              </p>
              <p className="pl-4 py-2 px-4">
                <IoLogoCss3 className="w-[40px] h-auto" />
              </p>
            </div>
          </div>
          <div className="pl-8 py-4">
            <h1 className="font-bold text-xl py-4">Frameworks</h1>
            <div className="flex">
              <p className="pl-4 py-2 px-4">
                <FaReact className="w-[40px] h-auto" />
              </p>
              <p className="pl-4 py-2 px-4">
                <IoLogoNodejs className="w-[40px] h-auto" />
              </p>
              <p className="pl-4 py-2 px-4">
                <SiTailwindcss className="w-[40px] h-auto" />
              </p>
            </div>
          </div>
          <div className="pl-8 py-4">
            <h1 className="font-bold text-xl py-4">Libraries</h1>
            <div className="grid grid-cols-4 md:flex">
              <p className="pl-4 py-4 px-4">
                <SiNextdotjs className="w-[40px] h-auto" />
              </p>
              <p className="pl-4 py-4 px-4">
                <SiChakraui className="w-[40px] h-auto" />
              </p>
              <p className="pl-4 py-4 px-4">
                <SiMaterialui className="w-[40px] h-auto" />
              </p>
              <p className="pl-4 py-4 px-4">
                <SiStyledcomponents className="w-[40px] h-auto" />
              </p>
              <p className="pl-4 py-4 px-4">Headless UI</p>
              <p className="pl-4 py-4 px-4">NEXT UI</p>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  )
}

export default Skills
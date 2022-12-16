import React from "react"
import Contact from "../components/Contact"
import Card1 from "../components/Cards/Card1"


const Works = () => {
  return (
    <div className="bg-[#141414] h-full text-start justify-center flex dark:bg-[#fcf9df]">
      <div className="w-[100vh]">
        <div className="py-8 text-2xl font-bold">
          <h1 className="text-gray-300 px-8 dark:text-[#141414]">Works</h1>
        </div>
        <div className="pl-6 grid-cols md:grid md:grid-cols-2">
          <Card1 />          
        </div>
        <div>
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default Works
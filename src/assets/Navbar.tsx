import { Link } from "react-router-dom"
import { navitem } from "../assets/data"
import HeroSction from "../components/HeroSction"



function Navbar() {
  return (
    <div className="bg-black ">
        {/* navbar begin */}
    <div className="flex justify-around pt-4 text-sm ">
        <h1 className="text-white">LearnCoding</h1>
        <div className="flex text-white gap-4 ">
       {
        navitem.map((item,index)=>(
            <div key={index}>
            <Link to={item.url}>{item.title}</Link></div>
        ))
    }
    </div>
    <button className="bg-lime-500 tetx-white/4 rounded-4xl px-4 py-1">Sign Up</button>
    </div>
    {/* navbarend */}

    <HeroSction/>
    </div>
  )
}

export default Navbar
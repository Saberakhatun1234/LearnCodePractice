import { StarIcon } from "lucide-react";

function HeroSection() {
  return (
    <div>
     


    <div className="text-center text-white pt-10 flex justify-center">

      <div className="flex items-center">
        {/* Dots */}
        <div className="size-5 bg-white rounded-full"></div>
        <div className="size-5 bg-white rounded-full"></div>
        <div className="size-5 bg-white rounded-full"></div>

        {/* Stars + Rating */}
        <div className="flex items-center gap-1 px-6">
          <StarIcon className="w-4 h-4 text-lime-500 fill-current" />
          <StarIcon className="w-4 h-4 text-lime-500 fill-current" />
          <StarIcon className="w-4 h-4 text-lime-500 fill-current" />
          <StarIcon className="w-4 h-4 text-lime-500 fill-current" />
          <StarIcon className="w-4 h-4 text-lime-500 fill-current" />
          <p className="text-xs px-3 text-white/90">(4.9/5 Rating Stars)</p>
        </div>
      </div>
      </div>
      <div className="bg-gradient-to-r from-lime-300 via-lime-700 to-lime-100 size-40 rounded-full blur-2xl opacity-80 absolute  right-0 translate-x-1/2 "/>
      <p className="text-center bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent text-5xl pt-8 pb-8">
  Learn Coding With us to glorify <br /> your career
</p>

  <div className="bg-gradient-to-r from-lime-300 via-lime-700 to-lime-100 size-40 rounded-full blur-2xl opacity-80 absolute left-2 inset-y-1/3"/>
<p className="text-center text-white/90 text-sm">We specialize in craeting marketing capaigns that increase visibility, generate ,<br/>leads and drive business growth.</p>

<div className="flex justify-center gap-4 pt-8 pb-20">

  <button className="text-[12px] rounded-3xl px-3 py-1 border-lime-400 border-2 text-center bg-lime-400 ">Get a free trial</button>
  <button className="text-sm rounded-4xl px-2 py-1 border-lime-400 border-2 text-center text-lime-400 text-[12px] ">Watch a tuitorial</button>
</div>


    </div>
  );
}

export default HeroSection;

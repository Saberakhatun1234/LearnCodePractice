import {  AlignVerticalSpaceAround,  ArrowDown,  ArrowUp,  AudioLines,  CircleDot,  LayoutGridIcon,  MoveRight,  PhoneCallIcon,  RecycleIcon, RefreshCcwIcon, Trophy, Users } from "lucide-react"
import Footer from "./Footer"



function BodySection() {
  return (
    <div className="mt-10">
        {/* part1 */}
        <div className="flex px-4 py-2 text-center">
            <div className="px-2 border-r border-gray-400">
                <span className="text-6xl">800K</span>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <button className="flex gap-1 justify-center bg-lime-400 px-2 py-0.5 rounded-2xl text-sm border-2 ml-8"><Users className="fill-black size-4"/> suscriber</button>
            </div>
            <div className="px-2 border-r border-gray-400">
                <span className="text-6xl">96%</span>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <button className="flex gap-1 justify-center bg-lime-400 px-2 py-0.5 rounded-2xl text-sm border-2 ml-8  "><Trophy className=" size-4"/>Job success</button>
            </div>
            <div className="px-2 border-r border-gray-400">
                <span className="text-6xl">15+</span>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <button className="flex gap-1 justify-center bg-lime-400 px-2 py-0.5 rounded-2xl text-sm border-2 ml-8"><AlignVerticalSpaceAround className=" size-4"/> years exprience</button>
            </div>
        </div>
        {/* part 2 */}
        <div className="bg-slate-50 h-80 pt-4">
        <div className="flex justify-between mx-20 my-8  mt-10 ">
            <div className="">
                <p className="text-3xl leading-12">Unlock Your Brand's Full<br/> Potential With Expert<br/> Marketing Solution</p>
                <p className="text-sm text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br/> Iste in debitis porro eaque placeat laborum voluptates <br/>quod dolor deleniti commodi.</p>
            </div>
            <img src="https://placehold.co/300x300" alt="" />
        </div>

   </div>
{/* part 3 */}
   <div className="mt-24 text-center">
    <p className="text-3xl leading-12">Partner with us to build powerful marketing <br/>capaigns that reach your target audience</p>
    <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, facilis, iure a saepe impedit deleniti <br/>magnam illo expedita non, maiores cupiditate? Animi eum .</p>
    <div className="flex justify-around mt-10 px-20 gap-8 text-center">
  {/* Card 1 */}
  <div className="flex flex-col h-full p-6 w-80 bg-slate-50 ">
    <RefreshCcwIcon className="w-10 h-10 mb-4 " />
    <p className="flex gap-2 text-lg font-semibold text-gray-800 mb-4 ">
      Marketing <MoveRight className="w-4 h-5 mt-1" />
    </p>
    <p className="text-gray-600 text-sm leading-relaxed text-justify">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, officiis!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, officiis!
    </p>
  </div>

  {/* Card 2 */}
  <div className="flex flex-col h-full p-8 w-80 bg-lime-500 border-2 border-gray-600">
    <LayoutGridIcon className="w-10 h-10 mb-4" />
    <p className="flex gap-2 text-lg font-semibold text-gray-800 mb-4 ">
      Analysis <MoveRight className="w-4 h-5 mt-1" />
    </p>
    <p className="text-gray-800 text-sm leading-relaxed text-justify">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, officiis!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, officiis!
    </p>
  </div>

  {/* Card 3 */}
  <div className="flex flex-col h-full p-6 w-80 bg-slate-50">
    <RecycleIcon className="w-10 h-10 mb-4 " />
    <p className="flex gap-2 text-lg font-semibold text-gray-800 mb-4 ">
    Recycle <MoveRight className="w-4 h-5 mt-1" />
    </p>
    <p className="text-gray-600 text-sm leading-relaxed text-justify">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, officiis!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, officiis!
    </p>
  </div>
</div>
   </div>
   {/* part 4 */}
   <hr className="text-gray-400 mt-12" />
   <div className="flex justify-around mt-10">
    <p className="flex gap-2 text-gray-600 font-bold"><AudioLines/>LOGOany</p>
    <p className="flex gap-2 text-gray-600 font-bold"><CircleDot/> CircleIcon</p>
    <p className="flex gap-2 text-gray-600 font-bold"><Trophy/>Trophy</p>
    <p className="flex gap-2 text-gray-600 font-bold"><PhoneCallIcon/>phone</p>
    <p className="flex gap-2 text-gray-600 font-bold"><AudioLines/>LOGOany</p>
   </div>
     <hr className="text-gray-400 mt-10" />
 
     {/* part 5 */}
     <div className="mt-20 flex justify-around ">
        <div>
            <p className="text-3xl leading-14">SEO and Performance<br/> Optimization</p>
            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga.<br/>Lorem, ipsum dolor sit amet consectetur.</p>
            <button className="my-4 bg-lime-500 rounded-2xl border-2 border-gray-600 px-4 py-1 ">Get a Free Trial</button>
        </div>
        <div>
            <ol className="flex flex-col gap-3 text-neutral-700 leading-7">
  <li className="flex justify-between items-center text-slate-500 bg-slate-100 rounded px-2 py-2">
    <span>1. Perform keyword research to understand</span>
    <ArrowDown className="w-5 h-5 text-gray-600" />
  </li>

  <li className="flex justify-between items-center text-slate-500 bg-slate-100 rounded px-2 py-2 ">
    <span>2. Optimize images to improve performance.</span>
    <ArrowDown className="w-5 h-5 text-gray-600" />
  </li>

  <li className="flex justify-between items-center text-slate-500 bg-slate-100 rounded px-2 py-2">
    <span>3. Setup a sitemap to improve SEO.</span>
    <ArrowDown className="w-5 h-5 text-gray-600" />
  </li>

  <li className="flex justify-between items-center text-neutral-700 bg-lime-500 border-2 border-gray-600 rounded px-2 py-2">
    <span>4. Regularly check for broken links.</span>
    <ArrowUp className="w-5 h-5 text-gray-600" />
  </li>
</ol>

            <p className="text-slate-500 mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/> Fugiat laboriosam voluptatem, corrupti dicta quia <br/>voluptates dolorem est esse error quae doloremque<br/> ad praesentium suscipit, sed porro eveniet distinctio!<br/> Ipsam, accusamus.</p>
        </div>
     </div>
     {/* part 6 footer */}
     <Footer/>
    </div>
  )
}

export default BodySection
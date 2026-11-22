import { TypeAnimation } from 'react-type-animation'
import { LuPlus } from "react-icons/lu";
import { FiMessageSquare } from "react-icons/fi";
import { FaRegMessage } from "react-icons/fa6";
import bubble from '../assets/bubble.png'

const Home = () => {
  return (
    <div className='pt-10 pb-5 px-3'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* text */}
        <div className="flex flex-col">
            <h1 className='text-[#947B51] text-[72px]'>
                Welcome<TypeAnimation 
                    sequence={[
                        '',
                        500,
                        '.',
                        1000,
                        '..',
                        1500,
                        '...',
                        2000
                    ]}
                    wrapper='span'
                    cursor={false}
                    repeat={Infinity}
                />
            </h1>

            <div className="mt-1 relative w-[250px]">
                <img 
                    className='object-cover '
                    src={bubble} alt="Bubble" 
                />
                <p className='text-[1.35rem] text-[#29291F] w-[200px]  absolute top-12 left-7'>
                    "Ngati dzulo sunayambe, lero ndi tsiku 
                    lopambana kuti uyambepo."
                </p>
            </div>
        </div>

        <div className="w-full h-full grid grid-cols-1">
            <div className="border border-dashed border-[#947B51] rounded-xl bg-[#E5DCC9] p-4 min-h-10 flex items-center gap-5 hover:cursor-pointer">
                <div className="bg-[#947B51] text-[#E5DCC9] p-4 flex items-center justify-center rounded-full">
                    <LuPlus size={25}/>
                </div>

                <div className="flex flex-col gap-2 text-[#29291F]">
                    <h3 className='text-2xl '>
                        Get started by planning your week!
                    </h3>

                    <p>
                        Month - Week #
                    </p>
                </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Home

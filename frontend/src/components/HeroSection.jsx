import card from '../assets/card.svg';
import vector from '../assets/vector 16.svg';

export default function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br pb-16 md:pb-28  pt-16 md:pt-18">
        <div className="max-w-10xl mx-auto grid grid-cols-1 md:grid-cols-2  items-center">
          {/* Left Content */}
          <div className="space-y-6 ps-8 sm:ps-12 md:ps-30 pe-4">
            <div className="bg-gray-800 inline-block text-white text-xs px-3 py-1 rounded-md">
              <span className="font-bold text-cyan-400">20%</span> DISCOUNT FOR <span className="font-bold">1 MONTH</span> ACCOUNT
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-8xl font-bold leading-tight">
              The Next <span className="text-cyan-400">Generation</span>
              <br /> Payment <span className="text-white">Method.</span>
            </h1>

            <p className="text-xl sm:text-base text-gray-300 max-w-lg">
              Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.
            </p>

            <button className="mt-4 px-6 py-2 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300 w-fit">
              Get ↗ Started
            </button>
          </div>

          {/* Right Image */}
          <div className="relative flex pt-5 justify-end ">
            <div className="relative w-full max-w-lg sm:max-w-xl md:max-w-4xl">
              <img src={vector} alt="vector" className="absolute top-0 right-0 w-full z-30 object-contain" />
              <img src={card} alt="card" className="absolute top-0 right-0 w-full z-20 object-contain" />
              <div className="pt-[100%]" /> {/* Spacer for height */}
            </div>
          </div>
        </div>

        {/* Stats Section */}
   <div className="mt-24 px-4 sm:px-20 md:px-40">
  <div className="flex flex-col xl:flex-row justify-between items-center gap-10 text-center md:text-left">
    
    {/* Stat 1 */}
    <div className="flex flex-col sm:flex-row items-center gap-2">
      <h2 className="text-2xl sm:text-3xl md:text-6xl font-[500]">3800+</h2>
      <p className="text-xl sm:text-2xl font-[500] md:text-3xl uppercase bg-gradient-to-br from-[#DEF9FA] via-[#7DE7EB] to-[#33BBCF] text-transparent bg-clip-text">
        User Active
      </p>
    </div>

    {/* Divider */}
    <div className="hidden xl:block text-white opacity-30 text-2xl">|</div>

    {/* Stat 2 */}
    <div className="flex flex-col sm:flex-row items-center gap-2">
      <h2 className="text-2xl sm:text-3xl md:text-6xl font-[500]">230+</h2>
      <p className="text-xl sm:text-2xl font-[500] md:text-3xl uppercase bg-gradient-to-br from-[#DEF9FA] via-[#7DE7EB] to-[#33BBCF] text-transparent bg-clip-text">
        Trusted by Company
      </p>
    </div>

    {/* Divider */}
    <div className="hidden xl:block text-white opacity-30 text-2xl">|</div>

    {/* Stat 3 */}
    <div className="flex flex-col sm:flex-row items-center gap-2">
      <h2 className="text-2xl sm:text-3xl md:text-6xl font-[500]">$230+</h2>
      <p className="text-xl sm:text-2xl font-[500] md:text-3xl uppercase bg-gradient-to-br from-[#DEF9FA] via-[#7DE7EB] to-[#33BBCF] text-transparent bg-clip-text">
        Transaction
      </p>
    </div>

  </div>
</div>


      </div>
    </>
  );
}

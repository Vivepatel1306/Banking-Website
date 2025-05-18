export default function About() {
  return (
    <section className="bg-gradient-to-br  text-white px-4 sm:px-6 md:px-12 py-12 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-24">
        
        {/* Left Section */}
        <div className="w-full xl:w-1/2 text-center xl:text-left space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            You do the business,<br />
            <span className="text-white/90">we’ll handle the money.</span>
          </h1>
          <p className="text-white/70 text-sm sm:text-base">
            With the right credit card, you can improve your financial life by building credit,
            earning rewards and saving money. But with hundreds of credit cards on the market.
          </p>
          <button className="bg-cyan-400 text-black font-semibold px-6 py-3 rounded-lg shadow hover:bg-cyan-300 transition">
            Get Started
          </button>
        </div>

        {/* Right Section (Features) */}
        <div className="w-full xl:w-1/2 space-y-6">
          {/* Feature 1 */}
          <div className="flex items-start gap-4">
            <div className="bg-cyan-500/10 p-3 rounded-full">
              <span className="text-cyan-400 text-2xl">★</span>
            </div>
            <div>
              <h3 className="font-semibold text-white text-base sm:text-lg">Rewards</h3>
              <p className="text-white/60 text-sm">
                The best credit cards offer some tantalizing combinations of promotions and prizes.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-4 bg-white/5 p-4 rounded-lg">
            <div className="bg-cyan-500/10 p-3 rounded-full">
              <span className="text-cyan-400 text-2xl">🛡</span>
            </div>
            <div>
              <h3 className="font-semibold text-white text-base sm:text-lg">100% Secured</h3>
              <p className="text-white/60 text-sm">
                We take proactive steps to make sure your information and transactions are secure.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start gap-4">
            <div className="bg-cyan-500/10 p-3 rounded-full">
              <span className="text-cyan-400 text-2xl">✈</span>
            </div>
            <div>
              <h3 className="font-semibold text-white text-base sm:text-lg">Balance Transfer</h3>
              <p className="text-white/60 text-sm">
                A balance transfer credit card can save you a lot of money in interest charges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

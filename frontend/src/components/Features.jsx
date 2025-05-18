import payment from '../assets/payment.svg';
import paypal from '../assets/paypal.svg';
import apple from '../assets/apple.svg';

export default function Features() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-16 gap-12">
      
      {/* Left Section - Overlapping Images */}
      <div className="flex-1 flex justify-center md:justify-start relative px-4 md:px-0">
        {/* Top Image - PayPal */}
        <img
          src={paypal}
          alt="PayPal"
          className="w-[250px] sm:w-[280px] md:w-[320px] lg:w-[350px] rounded-xl shadow-lg relative z-10"
        />

        {/* Bottom Image - Payment */}
        <img
          src={payment}
          alt="Payment"
          className="w-[220px] sm:w-[260px] md:w-[300px] lg:w-[320px] rounded-lg shadow-md absolute top-20 left-10 sm:left-16 md:left-20 lg:left-24 z-0"
        />
      </div>

      {/* Right Section - Text and Buttons */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Easily control your <br /> billing & invoicing.
        </h2>
        <p className="text-white/70 text-sm sm:text-base">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. 
          Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
        </p>
        <div className="flex justify-center md:justify-start gap-4 pt-4">
          <img 
            src={apple} 
            alt="App Store" 
            className="w-32  border-[200] sm:w-36"
          />
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
            alt="Play Store" 
            className="w-36 sm:w-40"
          />
        </div>
      </div>
    </section>
  );
}

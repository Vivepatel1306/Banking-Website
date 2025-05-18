import logo from '../assets/logo.svg';
import insta from '../assets/insta.svg';
import fb from '../assets/fb.svg';
import twitter from '../assets/twitter.svg';
import linkedin from '../assets/linkedin.svg';

export default function Footer(){
    return (
             <footer className=" pt-20 bg-[#0B0B0B]">
  <div className="ps-30 mx-auto flex flex-col md:flex-row justify-between gap-10">
    {/* Logo + Text */}
    <div className="flex-1">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Loading" className="w-24 md:w-48" />
      </div>
      <p className=" text-xl mt-4 text-white/70 max-w-xs">
        A new way to make the payments easy, reliable and secure.
      </p>
    </div>

    {/* Links Grid */}
    <div className="flex-[2] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm">
      <div>
        <h3 className="font-semibold mb-3 text-xl ">Useful Links</h3>
        <ul className="text-xl space-y-2 text-white/70">
          <li>Content</li>
          <li>How it Works</li>
          <li>Create</li>
          <li>Explore</li>
          <li>Terms & Services</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-3 text-xl">Community</h3>
        <ul className="space-y-2 text-white/70 text-xl">
          <li>Help Center</li>
          <li>Partners</li>
          <li>Suggestions</li>
          <li>Blog</li>
          <li>Newsletters</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-3 text-xl">Partner</h3>
        <ul className="space-y-2 text-white/70 text-xl">
          <li>Our Partner</li>
          <li>Become a Partner</li>
        </ul>
      </div>
    </div>
  </div>

  {/* Divider */}
  <hr className="my-8 border-white/10" />

  {/* Bottom Bar */}
<div className="  mx-auto flex flex-col md:flex-row 
  justify-between items-center
   ps-30 

  pb-10 gap-4 sm:gap-6 md:gap-8 
  text-[clamp(10px,1vw,14px)] text-white/50">
    <p className='text-xl'>Copyright © 2021 HooBank. All Rights Reserved.</p>
    <div className="flex pe-30 space-x-4">
      <a href="https://www.facebook.com"><img src={fb} alt="Facebook" className="w-5 h-5" /></a>
      <a href="https://www.instagram.com"><img src={insta} alt="Instagram" className="w-5 h-5" /></a>
      <a href="https://x.com/"><img src={twitter} alt="Twitter" className="w-5 h-5" /></a>
      <a href="https://www.linkedin.com/in/vivek-patel-637881313"><img src={linkedin} alt="LinkedIn" className="w-5 h-5" /></a>
    </div>
  </div>
</footer>

   
    )
}
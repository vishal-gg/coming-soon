import { useEffect, useState } from 'react';

const CrescentParfums = () => {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-stone-100">
      {/* Background Video */}

      <video 
        className="hidden sm:block absolute top-0 left-0 w-full h-full object-fill"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/Assets/desktop-poster.jpg"
      >
        <source src="/Assets/desktop-bg-video.webm" type="video/webm" />
        
        Your browser does not support the video tag.
      </video>
      <video 
        className="block sm:hidden absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/Assets/mobile-poster.jpg"
      >
        <source src="/Assets/mobile-bg-video.webm" type="video/webm" />
        
        Your browser does not support the video tag.
      </video>
      {/* Subtle overlay for better text visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/5"></div>
      
      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col items-center px-4 text-center">
        {/* Logo */}
        <div className={`mt-8 md:mt-10 transition-all duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
          <img src="/Assets/logo.svg" alt="Logo" />
        </div>
        
        {/* Main Content Section - Centered */}
        <div className="flex-1 flex flex-col justify-center items-center max-sm:gap-20 w-full max-w-xl ">
          {/* Tagline with responsive styling */}
          <h1 
            className={`font-serif text-2xl md:text-4xl mb-8 tracking-wider leading-tight transition-all duration-1500 ${animate ? 'opacity-100' : 'opacity-0'} tagg`}
            style={{ transitionDelay: '800ms', fontFamily: "'Carla Sans', serif" }}
          >
            A NEW MOON RISES IN THE WORLD OF FRAGRANCES.
          </h1>
         
          {/* Description */}
          <div 
            className= {`mb-8 transition-all duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} PaRa`}
            style={{ transitionDelay: '1200ms' }}
          >
            <p className="text-sm md:text-base mb-1">We are preparing an exciting fragrance experience for you.</p>
            <p className="text-sm md:text-base">Follow us on Instagram and stay tuned for our launch sneak peeks and updates.</p>
            <p className="text-sm md:text-base">Coming Soon...</p>
          </div>
          
          {/* CTA Button */}
        
            <a href="https://www.instagram.com/crescentparfums/" target="_blank" rel="noopener noreferrer" > 
            <button 
            className={`px-6 py-2 border border-black rounded-full cursor-pointer transition-all duration-500 text-sm ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '1500ms' }}
          >
            Follow us on Instagram </button> </a>
         
        </div>
        
        {/* Footer Links */}
        <div 
          className={`w-full py-6 flex justify-center gap-4 md:gap-6 text-xs md:text-sm transition-all duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '1800ms', fontFamily: "'Asap', sans-serif" }}
        >
          <a href="mailto:info@crescentparfums.com" className="hover:underline transition-all">CONTACT US</a>
          <a href="https://www.facebook.com/profile.php?id=61575491439463" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all">FACEBOOK</a>
          <a href="https://www.instagram.com/crescentparfums/" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all">INSTAGRAM</a>
          <a href="https://www.tiktok.com/@crescentparfums?_t=ZM-8vpdChUOBhm&_r=1" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all">TIKTOK</a>
        </div>
      </div>
    </div>
  );
};

export default CrescentParfums;
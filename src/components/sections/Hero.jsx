import React from 'react';
import { Star, ChevronDown } from 'lucide-react';
import { SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb, SiLaravel, SiMysql, SiHtml5, SiCss3, SiJavascript, SiAdobephotoshop, SiAdobeillustrator, SiAdobepremierepro, SiAdobeaftereffects, SiFacebook, SiGoogleanalytics } from 'react-icons/si';

import { PERSONAL_INFO, STATS } from '../../utils/constants';
import { scrollToSection } from '../../hooks/useScrollSpy';
import FadeIn from '../animations/FadeIn';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      <RadialGradientBackground variant="hero" />

      {/* content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
                    <FadeIn delay={0}>
                    <div className="inline-flex items-center gap-2.5 px-[18px] py-[11px] mb-8 bg-gradient-to-r from-primary/10 via-primary/15 to-primary/20 border border-primary/20 rounded-full">
                        <Star className="w-4 h-4 text-white fill-white" />
                        <span className="text-xs md:text-sm text-white tracking-[1.2px]">
                        {PERSONAL_INFO.title} | Based in {PERSONAL_INFO.location}
                        </span>
                    </div>
                    </FadeIn>

                    <FadeIn delay={100}>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight">{PERSONAL_INFO.Fullname}</h1>
                    </FadeIn>

                    {/* ✅ Fix: no <p> inside <p> */}
                    <FadeIn delay={200}>
                    <div className="text-lg text-white/70 max-w-[550px] mb-8">
                        <p>I am a results-driven Full-Stack software engineer with over four years of hands-on experience in web development and digital solutions. I have strong expertise in PHP, Laravel, React, MySQL, and modern frontend technologies, along with solid knowledge of REST APIs and system architecture. In addition to development, I possess practical experience in SEO, social media marketing, and paid ad campaign management, enabling me to build and promote high-performing digital products. I am also skilled in creative tools such as Adobe Photoshop, Illustrator, Premiere Pro, and After Effects, which helps me deliver visually compelling and user-focused solutions. Backed by a strong educational foundation in software engineering, I continuously strive to enhance my technical and problem-solving skills while delivering scalable, efficient, and business-oriented applications.</p>

                    </div>
                    </FadeIn>

                    <FadeIn delay={300}>
                    <button onClick={() => scrollToSection('contact')} className="inline-flex items-center gap-0 mb-12 group hover:scale-110 cursor-pointer">
                        <div className='relative z-10 bg-white text-[#212121] rounded-[17px] py-[13px] px-[26px] text-base font-medium border border-white'>Get in Touch</div>
                    </button>
                    </FadeIn>

                    {/* ✅ Fix: map must return JSX */}
                    <FadeIn delay={400}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-full">
                        {Array.isArray(STATS) && STATS.map((stat, index) => (
                            <div key={index} className='text-left border-r border-white/50 pr-10 last:border-r-0'>
                                <div className='text-2xl font-normal text-primary mb-[8px] font-mono'>{stat.value}</div>
                                <p className='text-sm text-white leading-snug'>{stat.label}</p>
                            </div>
                        ))}

                    </div>
                    </FadeIn>
            </div>

            {/* righ column developer image */}
            <FadeIn delay={200}>
                <div className="relative">
                    <div className="relative overflow-hidden rounded-2xl aspect-4/5 max-w-[500px] ml-auto group">
                        <div className="absolute inset-0 rounded-2xl overflow-hidden">
                            <div className="absolute inset-[-2px] bg-linear-to-r from-primary/20 via-primary/10 to-primary animate-spin-slow rounded-2xl"></div>
                        </div>
                        {/* Image container  */}
                        <div className="relative rounded-2xl overflow-hidden m-[1px] h-[calc(100% -2px)]">
                            <img src="/Developer Image.jpeg" alt="Developer Image" className='w-full h-full object-cover' />
                        </div>

                        {/* technology logos */}
                        <div className="absolute bottom-6 left-6 z-20">
                            <FadeIn delay={500}>
                                <div className="flex items-center gap-6 bg-black/40 backdrop-blur-sm border border-white/40 rounded-full px-6 py-3 w-full mb-3">
                                    <div className="w-6 h-6 flex items-center justify-center hover:scale-210 cursor-pointer transition-transform duration-300">
                                        <SiHtml5 className="w-full h-full text-primary" />
                                    </div> 
                                    <div className="w-6 h-6 flex items-center justify-center hover:scale-210 cursor-pointer transition-transform duration-300">
                                        <SiCss3 className="w-full h-full text-primary" />
                                    </div> 
                                    <div className="w-6 h-6 flex items-center justify-center hover:scale-210 cursor-pointer transition-transform duration-300">
                                        <SiJavascript className="w-full h-full text-primary" />
                                    </div> 
                                    <div className="w-6 h-6 flex items-center justify-center hover:scale-210 cursor-pointer transition-transform duration-300">
                                        <SiReact className="w-full h-full text-primary" />
                                    </div> 
                                    <div className="w-6 h-6 flex items-center justify-center hover:scale-210 cursor-pointer transition-transform duration-300">
                                        <SiLaravel className="w-full h-full text-primary" />  
                                    </div>
                                    <div className="w-6 h-6 flex items-center justify-center hover:scale-210 cursor-pointer transition-transform duration-300">
                                        <SiTailwindcss className="w-full h-full text-primary" />    
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 bg-black/40 backdrop-blur-sm border border-white/40 rounded-full px-6 py-3 w-full">
                                    <div className="w-6 h-6 flex items-center justify-center hover:scale-210 cursor-pointer transition-transform duration-300">
                                        <SiMysql className="w-full h-full text-primary" />
                                    </div>
                                    <div className="w-6 h-6 flex items-center justify-center hover:scale-210 cursor-pointer transition-transform duration-300">
                                        <SiAdobephotoshop className="w-full h-full text-primary" />
                                    </div>
                                    <div className="w-6 h-6 flex items-center justify-center hover:scale-210 cursor-pointer transition-transform duration-300">
                                        <SiAdobeillustrator className="w-full h-full text-primary" />
                                    </div>
                                    <div className="w-6 h-6 flex items-center justify-center hover:scale-210 cursor-pointer transition-transform duration-300">
                                        <SiAdobepremierepro className="w-full h-full text-primary" />
                                    </div>
                                    <div className="w-6 h-6 flex items-center justify-center hover:scale-210 cursor-pointer transition-transform duration-300">
                                        <SiAdobeaftereffects className="w-full h-full text-primary" />
                                    </div>
                                    <div className="w-6 h-6 flex items-center justify-center hover:scale-210 cursor-pointer transition-transform duration-300">
                                        <SiFacebook className="w-full h-full text-primary" />
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </FadeIn>            
        </div>
      </div>
      <button
        onClick={() => scrollToSection('about')}
        className='cursor-pointer absolute bottom-8 left-1/2 translate-x-1/2 animate-bounce z-[999]'
      >
        <ChevronDown className="w-8 h-8 text-primary cursor-pointer" />
      </button>
    </section>
  );
};

export default Hero;

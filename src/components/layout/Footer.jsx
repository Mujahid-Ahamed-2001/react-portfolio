import React from 'react'
import { Github, Linkedin,Twitter, Dribbble, Mail, MapPin, Heart } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS, NAV_LINKS } from '../../utils/constants';
import { scrollToSection } from '../../hooks/useScrollSpy';
import FadeIn from '../animations/FadeIn';
import { SiFacebook, SiWhatsapp } from 'react-icons/si';
const Footer = () => {
  const socialIcon = {
          github: Github,
          linkedin: Linkedin,
          facebook: SiFacebook,
          whatsapp: SiWhatsapp,
      };
  return (
    <footer className='relative bg-black overflow-hidden border-t border-white/10'>
      <div className="absolute inset-0 overflow-hidden">
        <div className='absolute top-0 left-1/4 w-96 h-96 bg-primary/10 opacity-30 rounded-full blur-3xl' />
        <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 opacity-30 rounded-full blur-3xl' />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-12 mb-12">
          <FadeIn delay={0} >
            <div>
              <h3 className="text-3xl font-bold bg-linear-to-r from-primary/80 via-primary to-primary/80 bg-clip-text text-transparent mb-4">
                {PERSONAL_INFO.name.split(' ')[0]}
              </h3>
              <p className="text-white/60 text-sm mb-6 leading-relaxed">
                {PERSONAL_INFO.tagline}
              </p>
              <div className="space-y-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className='group flex items-center gap-2 p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-primary/10 hover:border-primary/30 w-full transition-all duration-300'
                >
                  <div className="p-2 bg-primary/10 rounded-lg ">
                    <Mail className='w-4 h-4 text-primary' />
                  </div>
                  <span className="text-white/70 text-sm group:text-white transition-colors">
                    {PERSONAL_INFO.email}
                  </span>
                </a>

                <div className="flex items-center gap-2 p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-primary/10 hover:border-primary/30 w-full transition-all duration-300">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className='w-4 h-4 text-primary' />
                  </div>
                  <span className="text-white/70 text-sm group:text-white transition-colors">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={100} >
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) =>(
                  <li key={link.id}>
                    <button className="group flex items-center gap-2 text-white/60 hover:text-primary transition-all duration-300" onClick={() =>scrollToSection(link.id)}>
                      <div className='w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-primary/30 group-hover:w-2 transition-all duration-300' />
                      <span className="text-sm">{link.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={300} >
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col lg:md:flex-row md:flex-row items-center justify-between gap-4">
              <p className="text-white/50 text-sm">
                © {new Date().getFullYear()} {PERSONAL_INFO.name}
              </p>
              <p className="flex items-center gap-2 text-white/50 text-sm">
                Built with <Heart className='w-4 h-4 text-primary fill-primary animate-pulse' /> using React.JS
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}

export default Footer
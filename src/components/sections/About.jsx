import React, { useState } from 'react';
import { Download, Code2, Sparkles } from 'lucide-react';
import { SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb, SiLaravel, SiMysql, SiHtml5, SiCss3, SiJavascript, SiAdobephotoshop, SiAdobeillustrator, SiAdobepremierepro, SiAdobeaftereffects, SiFacebook, SiGoogleanalytics, SiPhp, SiBootstrap } from 'react-icons/si';
import { ABOUT_STATS, PERSONAL_INFO } from '../../utils/constants';
import FadeIn from '../animations/FadeIn';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';

const About = () => {
    
    // Skiils
    const skills = [
        {name: 'HTML5', icon: SiHtml5, color: '#61DAFB'},
        {name: 'CSS3', icon: SiCss3, color: '#000000'},
        {name: 'JavaScript', icon: SiJavascript, color: '#3178C6'},
        {name: 'React JS', icon: SiReact, color: '#06B6D4'},
        {name: 'Laravel', icon: SiLaravel, color: '#7c3aed'},
        {name: 'Tailwind CSS', icon: SiTailwindcss, color: '#5e05f7ff'},
        {name: 'Bootstrap', icon: SiBootstrap, color: '#5e05f7ff'},
        {name: 'PHP', icon: SiPhp, color: '#61DAFB'},
        {name: 'MySQL', icon: SiMysql, color: '#61DAFB'},
        {name: 'Photoshop', icon: SiAdobephotoshop, color: '#000000'},
        {name: 'Illustrator', icon: SiAdobeillustrator, color: '#3178C6'},
        {name: 'Premiere Pro', icon: SiAdobepremierepro, color: '#06B6D4'},
        {name: 'After Effects', icon: SiAdobeaftereffects, color: '#7c3aed'},
        {name: 'Facebook', icon: SiFacebook, color: '#5e05f7ff'},
    ];
    const skills2 = [
        {name: 'PHP', icon: SiPhp, color: '#61DAFB'},
        {name: 'MySQL', icon: SiMysql, color: '#61DAFB'},
        {name: 'Photoshop', icon: SiAdobephotoshop, color: '#000000'},
        {name: 'Illustrator', icon: SiAdobeillustrator, color: '#3178C6'},
        {name: 'Premiere Pro', icon: SiAdobepremierepro, color: '#06B6D4'},
        {name: 'After Effects', icon: SiAdobeaftereffects, color: '#7c3aed'},
        {name: 'Facebook', icon: SiFacebook, color: '#5e05f7ff'},
    ];
  return (
    // <div>About</div>
    <section id="about" className="relative py-20 bg-black overflow-hidden">
        <RadialGradientBackground variant='about'/>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Grid  */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                {/* Left column - content */}
                <div className="flex flex-col gap-12">
                    <div className="flex flex-col gap-8">
                        <FadeIn delay={60}>
                            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-primary/30 bg-primary/10 rounded-full w-fit">
                                <Code2 className='w-4 h-4 text-primary' />
                                <span className="text-sm text-primary font-medium">
                                    Full-Stack Developer
                                </span>
                                <Sparkles className='w-4 h-4 text-primary' />
                            </div>
                        </FadeIn>
                        <FadeIn delay={100}>
                            <h2 className="text-4xl lg:text-5xl font-normal text-white leading-tight">
                                Crafting Digital Experient That Matter
                            </h2>
                        </FadeIn>
                        <FadeIn delay={200}>
                            <div className="flex flex-col gap-4">
                                {PERSONAL_INFO?.bio?.map((bio, index) => (
                                    <p key={index} className='text-base text-white/70 leading-relaxed'>{bio}</p>
                                ))}
                            </div>
                        </FadeIn>
                    </div>
                    <FadeIn delay={300}>
                        <div className="grid grid-cols-3 gap-8">
                            {ABOUT_STATS.map((stat, index) => (
                                <div key={index} className="relative">
                                    <div className="absolute -left-4 top-0 w-1 h-full bg-linear-to-b from-primary via-primary-50 to-primary/20 rounded-full"></div>
                                    <div className="text-3xl font-normal text-white mb-2 fpnt-mono">
                                        {stat.value}
                                    </div>
                                    <p className="text-sm text-white/60 leading-snug">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                    <FadeIn delay={400}>
                        <button
                            onClick={()=> window.open(PERSONAL_INFO.resume, '_blank')}
                            className='cursor-pointer inline-flex items-center  gap-3 bg-white hover:bg-white/90 text-black rounded-full px-8 py-4 text-base font-medium transition-all duration-300 w-fit group'
                        >
                            <Download className='w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300' />
                            Download Resume
                        </button>
                    </FadeIn>
                </div>

                {/* right column - info grid  */}
                <FadeIn delay={300}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2 relative group">
                            <div className="absolute insert-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 cursor-pointer transition-opacity duration-300"></div>
                            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-xl">
                                        <Code2 className='w-6 h-6 text-primary' />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-white mb-2">Expertise</h3>
                                        <p className="text-sm text-white/70 leading-relaxed">
                                            Specialized in building scalable web applications with modern technologies and best practices
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute insert-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 cursor-pointer trantion-opacity duration-300"></div>
                            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transiton-all duration-300 h-full">
                                <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                                    <Sparkles className="w-5 h-5 text-primary" />
                                </div>
                                <h3 className="text-base font-semibold text-white mb-2">Clean Code</h3>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    Writing maintanable, well-documented code that scales.
                                </p>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute insert-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 cursor-pointer trantion-opacity duration-300"></div>
                            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transiton-all duration-300 h-full">
                                <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                                    <Download className="w-5 h-5 text-primary" />
                                </div>
                                <h3 className="text-base font-semibold text-white mb-2">Performance</h3>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    Optimizing for speed and efficiency in every project.
                                </p>
                            </div>
                        </div>

                        <div className="col-span-2 relative group">
                            <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                            <div className="relative bg-white/5 border border-white/10  rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                                <div className="grid grid-cols-3 gap-6 text-center">
                                    <div>
                                        <div className="text-2xl font-bold text-primary mb-1">100%</div>
                                        <div className="text-xs text-white/60">Employer Satisfaction</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-primary mb-1">4+ Years</div>
                                        <div className="text-xs text-white/60">Hands-On Industry Experience</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-primary mb-1">Results-Driven</div>
                                        <div className="text-xs text-white/60">Proven impact in Digital Marketing.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </FadeIn>
            </div>

            {/* skills grid  */}
            <FadeIn delay={500}>
                <div className="flex flex-col items-center gap-8">
                    <div className="text-center">
                        <h3 className="text-2xl font-normal text-white mb-2">
                            Tech Stack & Expertise
                        </h3>
                        <p className="text-sm text-white/60">
                            Technologies I work with to build amazing products.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-4xl">
                        {skills.map((skill, index) => (
                            <div 
                                key={index}
                                className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:scale-105 cursor-pointer"
                            >
                                <skill.icon className='text-3xl text-primary' />
                                <div className="text-sm text-white/80 font-medium text-center">
                                    {skill.name}
                                </div>

                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:to-primary/10 rounded-2xl transition-all duration-300"></div>
                            </div>
                        ))}
                    </div>

                </div>
            </FadeIn>
        </div>
    </section>
  )
}

export default About
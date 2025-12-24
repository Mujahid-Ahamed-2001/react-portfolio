import React, { useState } from 'react';
import { Download, Code2, Sparkles } from 'lucide-react';
import { SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb, SiLaravel, SiMysql, SiHtml5, SiCss3, SiJavascript, SiAdobephotoshop, SiAdobeillustrator, SiAdobepremierepro, SiAdobeaftereffects, SiFacebook, SiGoogleanalytics } from 'react-icons/si';
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
    ];
    const skills2 = [
        {name: 'MySQL', icon: SiMysql, color: '#61DAFB'},
        {name: 'Photoshop', icon: SiAdobephotoshop, color: '#000000'},
        {name: 'Illustrator', icon: SiAdobeillustrator, color: '#3178C6'},
        {name: 'Premiere Pro', icon: SiAdobepremierepro, color: '#06B6D4'},
        {name: 'After Effects', icon: SiAdobeaftereffects, color: '#7c3aed'},
        {name: 'Facebook', icon: SiFacebook, color: '#5e05f7ff'},
    ];
  return (
    // <div>About</div>
    <section id="about" className="f">
        <RadialGradientBackground variant='about'/>
        <div className="f">
            {/* Main Grid  */}
            <div className="f">
                {/* Left column - content */}
                <div className="f">
                    <div className="">
                        <FadeIn delay={60}>
                            <div className="f">
                                <Code2 className='' />
                                <span className="f">
                                    Full-Stack Developer
                                </span>
                            </div>
                        </FadeIn>
                        <FadeIn delay={100}>
                            <h2 className="f">
                                Crafting Digital Experient That Matter
                            </h2>
                        </FadeIn>
                        <FadeIn delay={200}>
                            <div className="f">
                                {PERSONAL_INFO?.bio?.map((bio, index) => (
                                    <p key={index} className='mb-2'>{bio}</p>
                                ))}
                            </div>
                        </FadeIn>
                    </div>
                    <FadeIn delay={300}>
                        <div className="f">
                            {ABOUT_STATS.map((stat, index) => (
                                <div key={index} className="f">
                                    <div className="c"></div>
                                    <div className="c">
                                        {stat.value}
                                    </div>
                                    <p className="c">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
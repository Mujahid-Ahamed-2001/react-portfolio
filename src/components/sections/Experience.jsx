import React from 'react' 
import { experiences } from '../../data/Experience'
import * as Icons from 'lucide-react'
import {Wrench} from 'lucide-react'
import FadeIn from '../animations/FadeIn'

const Experience = () => {
  return (
    <section className="relative py-20 bg-black overflow-hidden" id="experience">
        <div className="absolute inset-0 overflow-hidden">
            <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 opacity-2xl rounded-full blur-3xl' />
            <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 opacity-2xl rounded-full blur-3xl' />
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 opacity-20 rounded-full blur-3xl' />
        </div>

        <div 
            className="cls"
            style={{
                backgroundImage: `linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px)`,
                backgroundSize : `30px 30px`
            }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn delay={0}>
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                        <Wrench className='w-4 h-4 text-primary' />
                        <span className="text-sm text-primary font-medium tracking-wider uppercase">Professional Experience</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4 max-w-2xl mx-auto">
                        Built for innovation, Designed for results.
                    </h2>
                    <p className="text-lg text-white/60 max-w-xl mx-auto">
                        Over 4 years of professional experience in software engineering and digital solutions, specializing in PHP, Laravel, RESTful APIs, and scalable system development across enterprise and freelance environments.
                    </p>
                </div>
            </FadeIn>

            <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-1 gap-1 mb-6">
                {experiences.slice(0, 1).map((service, index) => {
                    const IconComponent = service.image || "/images/experience/favicon.png";

                    return (
                        <FadeIn key={service.id} delay ={100 + index *100} >
                            <div className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-primary/30 transition-all duration-300 h-full min-h-[280px] flex flex-col mx-auto max-w-lg w-full">
                                <div className="mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-1">
                                        <img src={IconComponent} alt="" className='w-8 h-8'/> 
                                        
                                    </div>
                                    <div className="flex w-full gap-6 text-[12px] text-white">
                                        <div className="flex-1">
                                            <span className="block mb-1 font-normal">
                                                Location: {service.Company_location}
                                            </span>
                                            <span className="block mb-1 font-normal">
                                                Employment Type: {service.location}
                                            </span>
                                        </div>

                                        <div className="flex-1">
                                            <span className="block mb-1 font-normal">
                                                Start Date: {service.Start_date}
                                            </span>
                                            <span className="block mb-1 font-normal">
                                                End Date: {service.End_date}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                                        {service.Designation} | {service.Company_Name}
                                    </h3>
                                    <ul className="list-disc list-inside text-white leading-relaxed text-[12px]">
                                        {service.experience.map((experiencess, indexs) => (
                                            <li key={indexs}>{experiencess}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/5 rounded-3xl transition-all duration-300 pointer-event-none" />
                            </div>
                        </FadeIn>
                    )
                })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                {experiences.slice(1).map((service, index) => {
                    const IconComponent = service.image || "/images/experience/favicon.png";

                    return (
                        <FadeIn key={service.id} delay ={300 + index *100} >
                            <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration all">
                                <div className="mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <img src={IconComponent} alt="" className='w-6 h-6'/>
                                    </div>
                                    <div className="flex w-full gap-6 text-[12px] text-white">
                                        <div className="flex-1">
                                            <span className="block mb-1 font-normal">
                                                Location: {service.Company_location}
                                            </span>
                                            <span className="block mb-1 font-normal">
                                                Employment Type: {service.location}
                                            </span>
                                        </div>

                                        <div className="flex-1">
                                            <span className="block mb-1 font-normal">
                                                Start Date: {service.Start_date}
                                            </span>
                                            <span className="block mb-1 font-normal">
                                                End Date: {service.End_date}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="">
                                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                                        {service.Designation} | {service.Company_Name}
                                    </h3>
                                    <ul className="list-disc list-inside text-white leading-relaxed text-[12px]">
                                        {service.experience.map((experiencess, indexs) => (
                                            <li key={indexs}>{experiencess}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/5 rounded-3xl transition-all duration-300 pointer-event-none" />
                            </div>
                        </FadeIn>
                    )
                })}
            </div>
        </div>

    </section>
  )
}

export default Experience
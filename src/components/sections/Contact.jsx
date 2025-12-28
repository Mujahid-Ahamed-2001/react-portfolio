import React, {useState} from 'react'
import { Mail, MapPin, Github, Linkedin, Twitter, Send, MessageSquare } from 'lucide-react'
import {SiWhatsapp, SiFacebook} from 'react-icons/si'
import { PERSONAL_INFO } from '../../utils/constants'
import FadeIn from '../animations/FadeIn'

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState({type: '', message: ''});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!formData.name || !formData.email || !formData.message){
            setStatus({ type: 'error', message: 'Please fill all the required fields.'})
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(formData.email)){
            setStatus({type: 'error', message: 'Please enter a valid email'})
            return;
        }

        setStatus({type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.'});
        setFormData({name:'', email: '', message: ''});

        setTimeout(() => {
           setStatus({type: '', message: ''}); 
        }, 5000);
    };

    const socialIcon = {
        github: Github,
        linkedin: Linkedin,
        facebook: SiFacebook,
        email: Mail,
        whatsapp: SiWhatsapp,
    };
  return (
    <section className="cls" id="contact">
        <div className="cls">
            <div className='' />    
            <div className='' />    
            <div className='' />    
        </div>   

        <div className="cls">
            <FadeIn delay={0}>
                <div className="cls">
                    <div className="cls">
                        <MessageSquare className='' />
                        <span className="cls">Get In Touch</span>
                    </div>
                    <h2 className="cls">
                        Let's Work Together
                    </h2>
                    <p className="cls">
                        I’m open to full-time roles and collaborations. Reach out using the form below and let’s talk.
                    </p>
                </div>
            </FadeIn>
            <div className="cls">
                <FadeIn delay={100} >
                    <div className="cls">
                        <form onSubmit={handleSubmit} className="cls">
                            <div>
                                <label htmlFor="name" className=''>
                                    Name
                                </label>
                            </div>
                        </form>
                    </div>
                </FadeIn>
            </div>
        </div>
    </section>
    
  )
}

export default Contact
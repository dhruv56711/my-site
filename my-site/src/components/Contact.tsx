import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheck, FaTimes, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [notification, setNotification] = useState<{
    show: boolean;
    success: boolean;
    message: string;
  }>({ show: false, success: false, message: '' });
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef<HTMLElement>(null);

  // Intersection Observer to detect when contact section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const showNotification = (success: boolean, message: string) => {
    setNotification({ show: true, success, message });
    setTimeout(() => {
      setNotification(prev => ({ ...prev, show: false }));
    }, 4000);
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_5a2luus', 'template_u4ido5e', form.current, '6vP02ksRVSiwuVWF1')
        .then(() => {
          showNotification(true, 'Message sent successfully! I will get back to you soon.');
          form.current?.reset();
        })
        .catch((error) => {
          showNotification(false, 'Failed to send message. Please try again later.');
          console.error(error);
        });
    }
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/14379333566`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-light relative" ref={contactRef}>
      {/* WhatsApp Floating Button */}
      
        <div 
          className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-green-600 transition-all animate-fade-in-up"
          onClick={openWhatsApp}
          title="Chat on WhatsApp"
        >
          <FaWhatsapp className="text-2xl" />
        </div>
    

      {/* Notification Popup */}
      {notification.show && (
        <div className={`fixed top-6 right-6 z-50 px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3 animate-fade-in-up ${
          notification.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          <div className={`text-xl ${notification.success ? 'text-green-500' : 'text-red-500'}`}>
            {notification.success ? <FaCheck /> : <FaTimes />}
          </div>
          <div>
            <p className="font-medium">{notification.message}</p>
          </div>
        </div>
      )}

      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 relative pb-2 text-center md:text-left">
          Get In Touch
          <span className="absolute left-0 bottom-0 h-1 w-12 bg-primary rounded-md"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center text-primary flex-shrink-0">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="font-medium mb-1">Email</h3>
                <p className="text-gray">dhruv56711@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center text-primary flex-shrink-0">
                <FaPhone />
              </div>
              <div>
                <h3 className="font-medium mb-1">Phone</h3>
                <p className="text-gray">+1 (437) 933-3566</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center text-primary flex-shrink-0">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="font-medium mb-1">Location</h3>
                <p className="text-gray">Toronto, ON, CA</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-6">
                <label htmlFor="name" className="block font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  name="user_name"
                  id="name" 
                  required
                  className="w-full px-4 py-2 border border-border rounded focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  name="user_email"
                  id="email" 
                  required
                  className="w-full px-4 py-2 border border-border rounded focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block font-medium mb-2">Message</label>
                <textarea 
                  name="message"
                  id="message" 
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-border rounded focus:border-primary focus:outline-none transition-colors"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-dark transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
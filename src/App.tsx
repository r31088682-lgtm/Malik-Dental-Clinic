import { useState } from 'react';
import { MapPin, Phone, Clock, Star, ShieldCheck, Heart, ThumbsUp, Activity, Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-teal-100 selection:text-teal-900 border-8 border-teal-600">
      {/* Navigation */}
      <nav className="fixed w-full bg-white z-50 border-b border-slate-200 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-teal-600 text-white rounded-sm flex items-center justify-center">
                <Activity size={24} />
              </div>
              <div>
                <span className="text-2xl font-bold tracking-tighter text-teal-900 uppercase block leading-none">Malik Dental</span>
                <span className="text-xs font-bold text-teal-600 tracking-[0.2em] uppercase">CLINIC</span>
              </div>
            </div>
            
            <div className="hidden md:flex space-x-8 items-center cursor-pointer">
              <a href="#about" className="text-sm font-medium text-slate-600 hover:text-teal-600 uppercase tracking-widest transition-colors">About</a>
              <a href="#services" className="text-sm font-medium text-slate-600 hover:text-teal-600 uppercase tracking-widest transition-colors">Services</a>
              <a href="#reviews" className="text-sm font-medium text-slate-600 hover:text-teal-600 uppercase tracking-widest transition-colors">Reviews</a>
              <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-teal-600 uppercase tracking-widest transition-colors">Contact</a>
              <a href="tel:+919560668155" className="px-6 py-3 bg-teal-600 text-white font-bold text-sm rounded-none hover:bg-teal-700 transition-colors uppercase tracking-tight flex items-center gap-2">
                <Phone size={18} />
                Call Now
              </a>
            </div>

            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-900 p-2">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-white border-b border-gray-100"
            >
              <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-center">
                <a href="#about" onClick={toggleMenu} className="block px-3 py-3 font-medium text-gray-700">About</a>
                <a href="#services" onClick={toggleMenu} className="block px-3 py-3 font-medium text-gray-700">Services</a>
                <a href="#reviews" onClick={toggleMenu} className="block px-3 py-3 font-medium text-gray-700">Reviews</a>
                <a href="#contact" onClick={toggleMenu} className="block px-3 py-3 font-medium text-gray-700">Contact</a>
                <a href="tel:+919560668155" className="mt-4 w-full text-center bg-teal-600 text-white px-6 py-3 rounded-none font-bold uppercase tracking-tight flex items-center justify-center gap-2">
                  <Phone size={18} />
                  +91 95606 68155
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="flex flex-col lg:flex-row items-stretch gap-12">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="lg:w-3/5 flex flex-col justify-center"
          >
            <div>
              <div className="inline-block px-3 py-1 bg-teal-100 text-teal-800 text-[10px] font-bold uppercase tracking-widest mb-6">
                Patient Centered Care
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[0.9] mb-8 uppercase">
                A Healthy <br className="hidden sm:block" />
                <span className="text-teal-600">Smile.</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-md leading-relaxed">
                Experience comfortable dental care in Ghaziabad. We specialize in pain-free root canal treatments (RCT) at affordable prices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href="tel:+919560668155" className="bg-teal-600 text-white px-8 py-4 rounded-none font-bold hover:bg-teal-700 transition-colors uppercase tracking-tight text-sm flex items-center justify-center gap-2">
                  <Phone size={18} />
                  +91 95606 68155
                </a>
                <a href="#contact" className="bg-[#F8FAFC] text-slate-900 border-2 border-slate-900 px-8 py-4 rounded-none font-bold hover:bg-slate-100 transition-colors uppercase tracking-tight text-sm flex items-center justify-center gap-2">
                  <MapPin size={18} />
                  Find Clinic
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8 border-t border-slate-200 pt-8 mt-4">
              <div className="border-l-4 border-teal-600 pl-4">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Our Location</h3>
                <p className="text-sm text-slate-800 leading-tight">
                  463, Bhatia Rd, Sangam Vihar, <br/>Ghaziabad, UP 201001
                </p>
              </div>
              <div className="border-l-4 border-teal-600 pl-4">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Clinic Hours</h3>
                <p className="text-sm text-slate-800 leading-tight italic">
                  Open Daily: 10:00 AM – 8:00 PM
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-2/5 relative flex"
          >
            <div className="w-full aspect-[3/4] lg:aspect-auto lg:h-full rounded-none border-8 border-teal-600 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Modern Dental Clinic" 
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-white p-6 border-t-8 border-teal-600 flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-sm flex items-center justify-center flex-shrink-0 text-teal-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h3 className="font-black text-slate-900 uppercase tracking-tight">Pain-Free</h3>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Treatments</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="mb-16 border-l-8 border-teal-600 pl-6"
          >
            <h2 className="text-teal-600 font-bold tracking-widest text-[10px] uppercase mb-3">Our Expertise</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 uppercase leading-[0.9]">Comprehensive <br/><span className="text-slate-400">Dental Solutions</span></h3>
            <p className="max-w-md text-slate-600">We offer affordable, high-quality treatments ensuring your complete comfort at every step.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Activity size={24} className="text-teal-600" />,
                title: 'Single-Sitting RCT',
                desc: 'Got a painful tooth? We specialize in Single-Sitting Root Canal Treatments that are quick and entirely pain-free.',
                highlight: true
              },
              {
                icon: <Heart size={24} className="text-teal-600" />,
                title: 'General Dentistry',
                desc: 'Routine checkups, cleanings, and preventative care to keep your smile bright and healthy for years to come.'
              },
              {
                icon: <ThumbsUp size={24} className="text-teal-600" />,
                title: 'Affordable Care',
                desc: 'Quality treatment does not have to be expensive. We pride ourselves on offering very reasonable and cheap prices.'
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className={`bg-slate-50 p-8 rounded-none border border-slate-200 transition-colors hover:bg-teal-50`}
              >
                <div className="w-12 h-12 bg-white rounded-sm border-l-4 border-teal-600 flex items-center justify-center mb-6 shadow-sm">
                  {service.icon}
                </div>
                <h4 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-3">{service.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">{service.desc}</p>
                {service.highlight && (
                  <div className="mt-6 inline-flex items-center text-teal-600 font-bold text-[10px] tracking-widest uppercase">
                    Recommended <ChevronRight size={14} className="ml-1" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16 border-b border-slate-200 pb-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-teal-600 font-bold tracking-widest text-[10px] uppercase mb-3">Patient Stories</h2>
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 uppercase">What Our <br/>Patients Say</h3>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="flex items-baseline gap-4"
            >
              <span className="text-6xl font-black text-teal-600 leading-none">4.4</span>
              <div className="flex flex-col">
                <div className="flex gap-1 mb-1 text-yellow-500">
                  {[1, 2, 3, 4].map(i => <Star key={i} size={16} className="fill-current" />)}
                  <Star size={16} className="fill-current" style={{ clipPath: 'inset(0 50% 0 0)' }} />
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Average Rating</span>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-0 border border-slate-200 bg-white"
          >
            {/* Review 1 */}
            <motion.div variants={fadeIn} className="p-8 border-b md:border-b-0 md:border-r border-slate-200 relative">
              <div className="flex text-yellow-500 mb-6">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} className="fill-current" />)}
              </div>
              <p className="text-slate-700 text-sm italic mb-8 h-24">
                "I heard about Malik dental clinic and after one treatment the pain was gone. Highly recommend!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-sm bg-teal-200 flex items-center justify-center text-teal-900 font-bold text-xs">S</div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-900 uppercase tracking-wider">Sushma Sushma</span>
                  <span className="text-[10px] text-slate-400 uppercase">4 months ago</span>
                </div>
              </div>
            </motion.div>

            {/* Review 2 */}
            <motion.div variants={fadeIn} className="p-8 border-b md:border-b-0 md:border-r border-slate-200 relative">
              <div className="flex text-yellow-500 mb-6">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} className="fill-current" />)}
              </div>
              <p className="text-slate-700 text-sm italic mb-8 h-24">
                "Got my RCT done ..single sitting and pain free. Excellent experience."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-sm bg-slate-200 flex items-center justify-center text-slate-900 font-bold text-xs">F</div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-900 uppercase tracking-wider">Farha Malik</span>
                  <span className="text-[10px] text-slate-400 uppercase">3 months ago</span>
                </div>
              </div>
            </motion.div>

            {/* Review 3 */}
            <motion.div variants={fadeIn} className="p-8 relative bg-teal-600 text-white flex flex-col justify-center items-center text-center">
               <p className="text-[10px] font-bold uppercase tracking-widest mb-2 text-teal-100">Contact Us Directly</p>
               <p className="text-2xl font-black mb-6">+91 95606 68155</p>
               <div className="h-1 w-12 bg-white"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section id="contact" className="py-20 bg-white text-slate-900 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 border border-slate-200 bg-[#F8FAFC]">
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="p-12 pr-6"
            >
              <div className="inline-block px-3 py-1 bg-slate-200 text-slate-800 text-[10px] font-bold uppercase tracking-widest mb-6">
                Get in Touch
              </div>
              <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase leading-none">Visit Our <br/><span className="text-teal-600">Clinic</span></h2>
              <p className="text-slate-600 text-sm mb-10 max-w-sm">We are conveniently located in Ghaziabad. Walk in or call ahead to book your appointment.</p>
              
              <div className="space-y-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="border-l-4 border-teal-600 pl-4">
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Clinic Address</h4>
                    <p className="text-sm text-slate-800 leading-tight">
                      463, Bhatia Rd, Sangam Vihar, Daulat Pura,<br />
                      Ghaziabad, UP 201001
                    </p>
                    <p className="text-[10px] text-teal-600 mt-2 font-bold uppercase tracking-widest">JCXV+7W Ghaziabad</p>
                  </div>
                  
                  <div className="border-l-4 border-teal-600 pl-4">
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Opening Hours</h4>
                    <p className="text-sm text-slate-800 leading-tight mb-2">Opens 10:00 AM Daily</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Call for Sundays</p>
                  </div>
                </div>

                <div className="border border-slate-200 p-6 bg-white flex items-center justify-between">
                  <div className="flex gap-4 items-center">
                     <div className="w-10 h-10 bg-teal-50 border-l-4 border-teal-600 flex items-center justify-center shrink-0">
                       <Phone className="text-teal-600" size={18} />
                     </div>
                     <div>
                       <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Direct Line</h4>
                       <a href="tel:+919560668155" className="text-xl font-black text-slate-900 hover:text-teal-600 transition-colors">
                         +91 95606 68155
                       </a>
                     </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 0.6 }}
               viewport={{ once: true }}
               className="relative border-l border-slate-200 bg-slate-900 p-4"
            >
              <div className="w-full h-full min-h-[400px] border-4 border-teal-600 bg-slate-800 relative">
                {/* Fallback map placeholder / visual representation */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                   <div className="w-12 h-12 bg-teal-600 text-white flex items-center justify-center mb-4">
                     <MapPin size={24} />
                   </div>
                   <p className="text-[10px] font-bold text-teal-400 uppercase tracking-widest">Location Map</p>
                </div>
                 
                {/* Embed Map if you want over the placeholder, replacing the SRC with actual maps if available */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14002.502931114515!2d77.4332997!3d28.665796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bc1912a20b%3A0xe53bc9d9bf2cb02f!2sMalik%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{border: 0, filter: 'grayscale(1) contrast(1.2)'}} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="relative z-10 opacity-70 hover:opacity-100 transition-opacity duration-300"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="h-20 bg-slate-900 flex flex-col md:flex-row items-center px-4 md:px-12 justify-center md:justify-between border-t-8 border-teal-600 gap-4 md:gap-0">
        <div className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.3em]">
          Precision • Hygiene • Compassion
        </div>
        <div className="flex gap-6">
          <span className="text-[10px] text-slate-300 font-bold uppercase tracking-widest text-center">© {new Date().getFullYear()} Malik Dental Clinic</span>
          <span className="text-[10px] text-teal-400 font-bold uppercase tracking-widest hidden md:inline">Ghaziabad, UP</span>
        </div>
      </footer>
    </div>
  );
}

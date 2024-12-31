import React, { useState, useEffect } from 'react';
import { Building2, Award, Users, Newspaper, Mountain, Recycle } from 'lucide-react';
import '../AboutStyles/AboutSection.css';
import purpose from '../BitsImages/purposeimage.jpeg';

const AboutSection = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const images = [purpose];

  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [images.length]); 

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-slide-up">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl mb-6">
            <span className="font-light">Bellary</span>
            <span className="font-medium"> Infotech Solutions.</span>
          </h2>
          
          <p className="text-gray-700 mb-8" style={{color:'black'}}>
            Bellary Infotech Solutions is not just another startup – it’s the future of digital innovation.
            We specialize in developing innovative applications to address billing challenges. Our flagship product,
            the BITS Engine, efficiently generates accurate billing amounts based on user-specific criteria. Additionally,
            we focus on creating seamless mobile apps and enhancing user experiences through robust web applications.
            We’re also pioneers in building smart billing systems and payment solutions that are designed to scale with your business needs.
          </p>
        </div>

        <div className="relative rounded-lg overflow-hidden shadow-xl h-[400px]">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Office ${idx + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                idx === imageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-16">
        {[ 
          { icon: <Building2 className="w-8 h-8" />, text: "Corporate Profile" },
          { icon: <Mountain className="w-8 h-8" />, text: "Vision and Values" },
          { icon: <Newspaper className="w-8 h-8" />, text: "Billing Solutions" },
          { icon: <Award className="w-8 h-8" />, text: "Mobile App Development" },
          { icon: <Users className="w-8 h-8" />, text: "Website Designing and Development" },
          { icon: <Recycle className="w-8 h-8" />, text: "Sustainability Disclosures" }
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center group">
            <div className="text-[#B4004E] mb-3 transform group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <span className="text-sm">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;

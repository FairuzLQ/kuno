'use client'

import { FaEnvelope, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const CardContactComponent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  const contacts = [
    {
      icon: <FaEnvelope size={24} className="text-gray-600" />,
      title: 'Email',
      detail: 'tes@mail.com',
    },
    {
      icon: <FaInstagram size={24} className="text-gray-600" />,
      title: 'Instagram',
      detail: '@tesofficial',
    },
    {
      icon: <FaWhatsapp size={24} className="text-gray-600" />,
      title: 'WhatsApp',
      detail: '+62 123-4567-890',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Title and Subtitle */}
      <div className="text-center mb-8">
        <h1 className="text-[48px] font-semibold text-gray-800">Kontak Kami</h1>
        <p className="text-gray-600 mt-2">
          Untuk request tutorial atau kerja sama, silahkan hubungi kami
        </p>
      </div>

      {/* Contact Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-4">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className={`flex items-start gap-4 p-6 mt-10 border border-gray-300 rounded-lg w-full md:w-1/3 transform transition duration-500 hover:scale-105 ${
              loading ? 'animate-pulse bg-gray-200' : 'bg-white'
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center w-12 h-12 bg-gray-300 rounded-md" />
            ) : (
              <div className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-md">
                {contact.icon}
              </div>
            )}

            <div className="flex flex-col">
              {loading ? (
                <div className="h-4 bg-gray-300 rounded w-20 mb-2" />
              ) : (
                <h3 className="text-sm font-semibold text-gray-800">{contact.title}</h3>
              )}
              {loading ? (
                <div className="h-4 bg-gray-300 rounded w-32" />
              ) : (
                <p className="text-gray-600 text-sm mt-1">{contact.detail}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardContactComponent;

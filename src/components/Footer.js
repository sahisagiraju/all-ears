import React, { useEffect, useState } from 'react';
import Logo from '../assets/hank.jsx';
import TillyLogo from '../assets/tilly.png';
import AlignableLogo from '../assets/alignable.png';
import { FaLinkedin } from 'react-icons/fa';
import { client } from '../sanityClient';

export default function Footer() {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    const fetchFooter = async () => {
      try {
        // UPDATED: fetching "footer" instead of "siteSettings"
        const data = await client.fetch(`*[_type == "footer"][0]`);
        setFooterData(data);
      } catch (error) {
        console.error("Failed to fetch footer data:", error);
      }
    };
    fetchFooter();
  }, []);

  // ... (Rest of the file stays exactly the same)
  if (!footerData) return null;

  return (
    <>
      <footer className="bg-[#263238] text-white px-10 py-6 font-inter">
        <div className="flex flex-col md:flex-row justify-between gap-y-8 gap-x-16">
          <div className="md:w-1/2 text-center md:text-left">
            <Logo className="h-10 mx-auto md:mx-0 mb-3" />
            <h2 className="text-xl font-semibold my-2">All Ears Autism Services</h2>
            <p className="text-gray-300 text-sm self-center">{footerData.contactInfo?.phone}</p>
            <p className="text-gray-300 text-sm mb-2">{footerData.contactInfo?.email}</p>
            <div className="mt-3 flex justify-center md:justify-start items-center gap-4 flex-wrap">
              {footerData.socialLinks?.linkedin && (
                <a href={footerData.socialLinks.linkedin} className="text-white text-xl" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              )}
              {footerData.socialLinks?.tilly && (
                <a href={footerData.socialLinks.tilly} target="_blank" rel="noopener noreferrer" className="block"> 
                  <img src={TillyLogo} alt="Tilly" className="h-9 object-contain" />
                </a>
              )}
              {footerData.socialLinks?.alignable && (
                <a href={footerData.socialLinks.alignable} target="_blank" rel="noopener noreferrer" className="block">
                  <img src={AlignableLogo} alt="Alignable" className="h-7 object-contain" />
                </a>
              )}
            </div>
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-base font-semibold mb-2.5">Company</h3>
            <ul className="list-none p-0 m-0 text-sm">
              {footerData.footerNavItems?.map((item, index) => (
                <li key={index} className="mb-2">
                  <a href={item.link} className="text-gray-200 no-underline font-normal hover:text-white transition-colors" target={item.link.startsWith('http') ? "_blank" : "_self"} rel={item.link.startsWith('http') ? "noopener noreferrer" : ""}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
      <div className="bg-[#1c262b] text-center text-gray-400 text-xs py-2 font-inter">
        {footerData.footerCopyright}
      </div>
    </>
  );
}
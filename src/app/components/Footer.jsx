import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container pl-0 py-0 flex justify-between items-center">
        <img src="/images/logo.png" alt="Logo" style={{ width: '20%', height: '20%', marginLeft: '-3%', marginTop:'-10%' }} />
        <p className="text-slate-600" style={{ marginTop: '-15%' }}>Luis David Fajardo.</p>
      </div>
    </footer>
  );
};

export default Footer;

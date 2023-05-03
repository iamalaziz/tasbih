import React from 'react';

const Footer = () => {
  return (
    <footer className="absolute bottom-4 left-0 right-0">
      <p className="text-text-dark text-center">
        Made By
        <a
          className="underline pl-1"
          href="https://github.com/iamalaziz"
          target="_blank"
          rel="noreferrer"
        >
          [Abdulaziz]
        </a>
        <a
          className="text-accent pl-2"
          href="https://www.buymeacoffee.com/iamalaziz"
          target="_blank"
          rel="noreferrer"
        >
          Buy me a coffee
        </a>
      </p>
    </footer>
  );
};

export default Footer;

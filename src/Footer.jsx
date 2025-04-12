import React, { useState } from "react"; // Optional: Add styles for the footer
function Footer() {
  const [buyCoffee, setBuyCoffe] = useState(false);
  function buyMeCoffee() {
    setBuyCoffe(!buyCoffee);
  }
  return (
    <footer className="footer text-center bg-green-50 text-black dark:text-white dark:bg-gray-900 py-4">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:flex text-center justify-around items-center capitalize ">
        <p>&copy; {new Date().getFullYear()} Afifi. All rights reserved.</p>

        <nav className="flex flex-row items-center justify-center gap-2 ">
          <button onClick={buyMeCoffee} className="capitalize">
            buy me a coffee
            <div className="inline-block animate-bounce"> ☕</div>
          </button>
          <a href="mailto:hamed4businessh4b@gmail.com">Contact Me</a>
        </nav>

        <div className="flex flex-row justify-center items-center gap-2 md:gap-4">
          <a
            href="https://facebook.com/ABNAFIFI/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[30px] md:w-[35px]"
          >
            <img
              className="w-full h-full"
              src="/footer_ico/facebook_logo.svg"
              alt="Facebook"
            />
          </a>
          <a
            href="https://x.com/abn_afify"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[30px] md:w-[35px] "
          >
            <img
              className="w-full h-full"
              src="/footer_ico/twitter_logo.svg"
              alt="X"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/abn-afify/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[30px] md:w-[35px] "
          >
            <img src="/footer_ico/inkedin_logo.svg" alt="Linkedin" />
          </a>
        </div>

        <p className="">Built with ❤️ by Afifi.</p>
      </div>
    </footer>
  );
}

export default Footer;

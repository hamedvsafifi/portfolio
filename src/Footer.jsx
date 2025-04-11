import React from "react"; // Optional: Add styles for the footer

function Footer() {
  return (
    <footer className="footer text-center bg-green-50 text-black dark:text-white dark:bg-gray-900 py-4">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:flex text-center justify-around items-center ">
        <p>&copy; {new Date().getFullYear()} Afifi. All rights reserved.</p>

        <nav className="flex flex-row items-center justify-center gap-2">
          <a href="/privacy-policy">Privacy Policy -</a>
          <a href="/terms-of-service">Terms of Service -</a>
          <a href="/contact">Contact Us</a>
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

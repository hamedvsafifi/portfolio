function About({ children }) {
  return (
    <div className="text-black dark:text-white my-10 ">
      <h3 className="text-gray-700 dark:text-gray-300 mb-1 text-3xl">About</h3>
      <p className="mx-5 md:mx-10 mt-5 px-5 text-gray-700 dark:text-gray-300 text-lg border-x-4 border-blue-500 dark:border-[#BFF0BF] md:hyphens-auto ">
        {children}
      </p>
    </div>
  );
}
export default About;

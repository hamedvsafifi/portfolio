import React from "react";

function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const res = await fetch("/.netlify/functions/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Message sent!");
        form.reset();
      } else {
        const errorData = await res.json();
        console.log("Server Error:", errorData);
        alert("Failed to send message: " + errorData.error);
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="flex justify-center py-5 min-h-fit">
      <form
        onSubmit={handleSubmit}
        className="text-black dark:text-cyan-50 border-x-2 px-10 pb-4 rounded-lg shadow-lg border-sky-500 dark:border-sky-200 max-h-fit w-full max-w-[500px]"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-2 text-base">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-green-500 text-base"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-2 text-base">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-green-500 text-base"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block font-medium mb-2 text-base">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-green-500 text-base"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition duration-200 text-lg"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;

import React from "react";


const ContactUs = () => {


  return (
    <div className=" flex flex-col">
      <div className="w-full bg-gradient-to-r from-amber-800 via-amber-700 to-amber-800 py-4 mt-auto rounded-2xl">
        <div className="max-w-6xl mx-auto text-center text-neutral-900">
          &copy; {new Date().getFullYear()} Coffee Kala. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
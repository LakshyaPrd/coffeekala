import React from "react";
import ExpandableCardDemo from "../ui/ExpandableCardDemo";
import cards from "../data/Cards.jsx"; 
import ContactUs from "./ContactUs.jsx";
const Menu = () => {
  return (
    <div className="mt-12">
      
      <ExpandableCardDemo cards={cards} /> 
      <div className='mt-16 sm:mt-20 lg:mt-24'>
        <ContactUs/>
      </div>
    </div>
    
  );
};

export default Menu;
import React from "react";
import ExpandableCardDemo from "../ui/ExpandableCardDemo";
import cards from "../data/Cards.jsx"; 

const Menu = () => {
  return (
    <div className="mt-12">
      
      <ExpandableCardDemo cards={cards} /> 
    </div>
  );
};

export default Menu;
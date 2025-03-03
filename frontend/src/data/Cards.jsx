import img from "../assets/cappu.png"; // Replace with your actual image

const Cards = [
  {
    title: "Hot Brews",
    src: img,
    ctaText: "View",
    content: () => (
      <ul className="list-disc list-inside">
        <li>Espresso</li>
        <li>Americano</li>
        <li>Flat White</li>
        <li>Cappuccino</li>
        <li>Mocchiato</li>
        <li>Café Latte</li>
        <li>Cafe Mocha</li>
        <li>Affogato</li>
        <li>Cappuccino Grande</li>
      </ul>
    ),
  },
  {
    title: "Cold Brews",
    src: img,
    ctaText: "View",
    content: () => (
      <ul className="list-disc list-inside">
        <li>Iced Americano</li>
        <li>Classic Frappe (Cold Coffee)</li>
        <li>Iced Cold Coffee</li>
        <li>Iced Café Latte</li>
        <li>Iced Mocha</li>
        <li>Iced Caramel Latte</li>
        <li>Pink Lavender Latte</li>
        <li>Caramel Popcorn Iced Latte</li>
        <li>Tiramisu Frappe</li>
      </ul>
    ),
  },
  {
    title: "Hot Chocolate",
    src: img,
    ctaText: "View",
    content: () => (
      <ul className="list-disc list-inside">
        <li>Classic Hot Cocoa</li>
        <li>Hazelnut Hot Chocolate</li>
        <li>Coconut Hot Chocolate</li>
        <li>Hot Nutella</li>
      </ul>
    ),
  },
  {
    title: "Manual Brews",
    src: img,
    ctaText: "View",
    content: () => (
      <ul className="list-disc list-inside">
        <li>V-60 Pour Over</li>
        <li>Vietnamese Drip</li>
        <li>Aero Press</li>
        <li>French Press</li>
      </ul>
    ),
  },
  {
    title: "Shakes",
    src: img,
    ctaText: "View",
    content: () => (
      <ul className="list-disc list-inside">
        <li>Strawberry</li>
        <li>Bubblegum</li>
        <li>Butterscotch</li>
        <li>Caramel Banana</li>
        <li>KitKat / Oreo Shake</li>
        <li>Mango Berry Shake</li>
        <li>Nutella Shake</li>
        <li>Brownie Shake</li>
        <li>Biscoff Shake</li>
        <li>Oreo Mango Shake</li>
      </ul>
    ),
  },
  {
    title: "Mocktails",
    src: img,
    ctaText: "View",
    content: () => (
      <ul className="list-disc list-inside">
        <li>Virgin Mojito</li>
        <li>Starwberry Mojito</li>
        <li>Blueberry Mojito</li>
        <li>Cranberry Mojito</li>
        <li>Raspberry Mojito</li>
        <li>Watermelon Mojito</li>
        <li>Green Apple Fiz</li>
        <li>Passion Fruit Lemonade</li>
        <li>Pink Lady-  <span className="italic font-light">Strawberry + Rose</span></li>
        <li>Love Affair- <span className="italic font-light">Rose + Lychee</span></li>
        <li>Malibu Sunset</li>
      </ul>
    ),
  },
  {
    title: "Chai",
    src: img,
    ctaText: "View",
    content: () => (
      <ul className="list-disc list-inside">
        <li>Adrak Elaichi Chai </li>
        <li>Masala Chai </li>
        <li> Ginger Lemon Honey Tea</li>
        <li>Detox Kahwa</li>
        <li>Green Tea</li>
      </ul>
    ),
  },
  {
    title: "Smoothies",
    src: img, // Replace with actual image source
    ctaText: "View",
    content: () => (
      <ul className="list-disc list-inside">
        <li>Strawberry Smoothie</li>
        <li>Banana Almond Smoothie</li>
        <li>Berry Smoothie</li>
        <li>Mix Fruit Smoothie</li>
        <li>Dry Fruit Smoothie</li>
      </ul>
    ),
  },
  
  {
    title: "Iced Tea",
    src: img, // Replace with actual image source
    ctaText: "View",
    content: () => (
      <ul className="list-disc list-inside">
        <li>Lemon Iced Tea</li>
        <li>Peach Iced Tea</li>
        <li>Strawberry Iced Tea</li>
        <li>Orange Iced Tea</li>
        <li>Water Melon Iced Tea</li>
        <li>Blueberry Iced Tea</li>
        <li>Lychee Iced Tea</li>
        <li>Mango Iced Tea</li>
        <li>Cranberry Iced Tea</li>
        <li>Blueberry Rose Mint Iced Tea</li>
        <li>Real Rose & Sweet Mint</li>
        <li>Redbull Iced Tea</li>
      </ul>
    ),
  },
  {
    title: "Asian Wok",
    src: img, 
    ctaText: "View",
    content: () => (
      <ul className="list-disc list-inside">
        <li>Fried Rice</li>
        <li>Spring Roll</li>
        <li>Cheese Roll</li>
        <li>Onion Ring</li>
        <li>Honey Chilli Potato</li>
        <li>Corn Cheese Balls</li>
        <li>Crispy Corn</li>
        <li>Schezwan Fried Rice</li>
      </ul>
    ),
  },
  {
    title: "Pasta",
    src: img, 
    ctaText: "View",
    content: () => (
      <ul className="list-disc list-inside">
        <li>Alfredo Pasta</li>
        <li>Penne Al Arrabbiata – The Original Red Sauce</li>
        <li>Spaghetti Aglio-e-olio</li>
        <li>Pink Sauce Pasta</li>
        <li>Mac n Cheese – White</li>
        <li>Mac n Cheese – Red</li>
      </ul>
    ),
  },
  {
    title: "Sandwich",
    src: img, 
    ctaText: "View",
    content: () => (
      <ul className="list-disc list-inside">
        <li>Coleslaw</li>
        <li>Veg Exotica Sandwich</li>
        <li>Spinach & Corn Sandwich</li>
        <li>Tandoori Paneer Sandwich</li>
        <li>Onion Mushroom Sandwich</li>
        <li>Chilly Paneer Sandwich</li>
      </ul>
    ),
  },
  {
    title: "Pizza",
    src: img, 
    ctaText: "View",
    content: () => (
      <ul className="list-disc list-inside">
        <li>Margherita Pizza</li>
        <li>OTC Pizza</li>
        <li>Mexican Pizza</li>
        <li>Italian Pizza</li>
        <li>Bhuna Mushroom</li>
        <li>World of Veggies</li>
        <li>Farm House Pizza</li>
        <li>Paneer Tikka</li>
      </ul>
    ),
  },
  {
    title: "Burgers",
    src: img, 
    ctaText: "View",
    content: () => (
      <ul className="list-disc list-inside">
        <li>Aloo Tikki Burger</li>
        <li>Veggie Delight</li>
        <li>Green Patty Burger</li>
        <li>Falafel Burger</li>
        <li>Spicy Paneer Burger</li>
      </ul>
    ),
  },
  {
    title: "Salad Story",
    src: img, 
    ctaText: "View",
    content: () => (
      <ul className="list-disc list-inside">
        <li>Exotic Greek Salad</li>
        <li>Caesar Salad</li>
      </ul>
    ),
  },
  {
    title: "Soups",
    src: img, 
    ctaText: "View",
    content: () => (
      <ul className="list-disc list-inside">
        <li>Cream Of Tomato</li>
        <li>Asian Hot & Sour</li>
        <li>Lemon Coriander Soup</li>
        <li>Sweet Corn Soup</li>
        <li>Manchow Soup</li>
        <li>Broccoli Almond Soup</li>
      </ul>
    ),
  },
  {
    title: "Wraps & Rolls",
    src: img, 
    ctaText: "View",
    content: () => (
      <ul className="list-disc list-inside">
        <li>Veggie Wrap</li>
        <li>Falafel Wrap</li>
        <li>Paneer Tikka Wrap</li>
      </ul>
    ),
  },
  {
    title: "Noodles",
    src: img, 
    ctaText: "View",
    content: () => (
      <ul className="list-disc list-inside">
        <li>Maggie</li>
        <li>Vegetable Maggie</li>
        <li>Hakka Noodles</li>
        <li>Schezwan Noodles</li>
      </ul>
    ),
  },
  {
    title: "Rice Bowls",
    src: img, 
    ctaText: "View",
    content: () => (
      <ul className="list-disc list-inside">
        <li>Paneer Steak Rice Bowl <span className="italic">(with sauté vegetable & mashed potato)</span></li>
        <li>Chilli Paneer Rice Bowl</li>
      </ul>
    ),
  },
  {
    title: "Garlic Bread",
    src: img, 
    ctaText: "View",
    content: () => (
      <ul className="list-disc list-inside">
        <li>Classic Garlic Bread</li>
        <li>Cheese Garlic Bread</li>
        <li>Mexican Garlic Bread</li>
      </ul>
    ),
  },
  {
    title: "French Fries",
    src: img, 
    ctaText: "View",
    content: () => (
      <ul className="list-disc list-inside">
        <li>Regular / Peri Peri / Cajun Spice / Cheese Loaded</li>
        <li>Potato Wedges</li>
      </ul>
    ),
  },
  {
    title: "Crispy Nachos",
    src: img, 
    ctaText: "View",
    content: () => (
      <ul className="list-disc list-inside">
        <li>Baked Corn Cheesy Nachos</li>
        <li>Nachos Mexican Bowl</li>
      </ul>
    ),
  },
  {
    title: "Deserts",
    src: img, 
    ctaText: "View",
    content: () => (
      <ul className="list-disc list-inside">
        <li>Sundae</li>
        <li>Chocolate Brownie with Nutella & Hazelnut</li>
        <li>Choco - Walnut Brownie with Hot Chocolate Sauce & Ice Cream</li>
      </ul>
    ),
  },
  
];

export default Cards;
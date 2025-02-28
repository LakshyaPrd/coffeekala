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
  // Add more categories as needed
];

export default Cards;
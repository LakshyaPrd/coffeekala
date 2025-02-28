"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { cn } from "../utils/cn";
import cards from "../data/Cards.jsx"; // Import the cards array

export function ExpandableCardDemo() {
  const [active, setActive] = useState(null); // Track the active card
  const ref = useRef(null); // Ref for detecting outside clicks
  const id = useId(); // Unique ID for animations

  // Close the detailed view when clicking outside
  useOutsideClick(ref, () => setActive(null));

  // Close the detailed view when pressing the Escape key
  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      {/* Overlay for the expanded card */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      {/* Expanded card view */}
      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 grid place-items-center z-[100] p-4"> {/* Add padding for mobile */}
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-[60vh] md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden p-6"
            >
              {/* Card content without the image */}
              <div>
                <motion.h3
                  layoutId={`title-${active.title}-${id}`}
                  className="font-bold text-neutral-700 dark:text-neutral-200"
                >
                  {active.title}
                </motion.h3>
              </div>

              {/* Render the content function */}
              <div className="pt-4 relative flex-1 overflow-y-auto"> {/* Allow scrolling */}
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-neutral-600 text-xs md:text-sm lg:text-base flex flex-col items-start gap-4 dark:text-neutral-400"
                >
                  {typeof active.content === "function"
                    ? active.content() // This will render the content in a column
                    : active.content}
                </motion.div>
              </div>

              {/* Close button */}
              <motion.button
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="px-4 py-2 text-sm rounded-full font-bold bg-red-500 text-white mt-4"
                onClick={() => setActive(null)}
              >
                Close
              </motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* List of cards */}
      <div className="flex justify-center p-4">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl w-full">
          {cards.map((card, index) => (
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              key={`card-${card.title}-${id}`}
              onClick={() => setActive(card)} // Set the active card on click
              className={cn(
                "flex-shrink-0 w-full p-4 flex flex-col justify-between items-center bg-neutral-800 rounded-xl cursor-pointer",
                active === card && "bg-blue-100"
              )}
            >
              <div className="flex flex-col items-center gap-4">
                <motion.div layoutId={`img-${card.title}-${id}`}>
                  <img
                    width={100}
                    height={100}
                    src={card.src}
                    alt={card.title}
                    className="h-40 w-40 rounded-lg object-cover object-top"
                  />
                </motion.div>
                <div className="text-center">
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-medium text-neutral-800 dark:text-neutral-200"
                  >
                    {card.title}
                  </motion.h3>
                </div>
              </div>
              <motion.button
                layoutId={`button-${card.title}-${id}`}
                className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent the card click event from firing
                  setActive(card); // Set the active card
                }}
              >
                {card.ctaText}
              </motion.button>
            </motion.div>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ExpandableCardDemo;
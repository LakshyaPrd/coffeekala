import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import ContactUs from './ContactUs';

import { FaUserCircle, FaUserAlt, FaUserTie, FaUserNinja, FaUserAstronaut } from 'react-icons/fa';
import { RiUser3Fill, RiUserStarFill, RiUserHeartFill, RiUserSmileFill } from 'react-icons/ri';


const TESTIMONIALS = [
  {
    quote: "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Lakshya Pradhan",
    iconColor: "text-amber-500",
    iconType: "user-circle", // Type of icon to use
    rating: 5,
    date: "March 15, 2025"
  },
  {
    quote: "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Sachin Sharma",
    iconColor: "text-blue-500",
    iconType: "user-tie",
    rating: 4,
    date: "February 22, 2025"
  },
  {
    quote: "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Abhijeet Gulati",
    iconColor: "text-green-500",
    iconType: "user-star",
    rating: 5,
    date: "January 10, 2025"
  },
  {
    quote: "The coffee here is absolutely divine! The ambiance creates the perfect setting for both work and relaxation.",
    name: "Priya Malhotra",
    iconColor: "text-purple-500",
    iconType: "user-heart",
    rating: 5,
    date: "December 5, 2024"
  },
  {
    quote: "Their signature blend is worth every penny. I've become a regular since my first visit.",
    name: "Rahul Verma",
    iconColor: "text-red-500",
    iconType: "user-ninja",
    rating: 4,
    date: "June 18, 2025"
  }
];

// Array of avatar colors to randomly pick from for new reviews
const AVATAR_COLORS = [
  "text-amber-500", "text-blue-500", "text-green-500", "text-purple-500", 
  "text-red-500", "text-pink-500", "text-indigo-500", "text-teal-500"
];

// Array of icon types to randomly pick from
const ICON_TYPES = [
  "user-circle", "user-alt", "user-tie", "user-ninja", "user-astronaut",
  "user-fill", "user-star", "user-heart", "user-smile"
];

// Helper function to get random avatar color
const getRandomAvatarColor = () => {
  const randomIndex = Math.floor(Math.random() * AVATAR_COLORS.length);
  return AVATAR_COLORS[randomIndex];
};

// Helper function to get random icon type
const getRandomIconType = () => {
  const randomIndex = Math.floor(Math.random() * ICON_TYPES.length);
  return ICON_TYPES[randomIndex];
};

// User Avatar Icon component using React Icons
const UserAvatar = ({ iconType, color }) => {
  // Function to render the appropriate icon based on type
  const renderIcon = () => {
    switch (iconType) {
      case 'user-circle':
        return <FaUserCircle className={`w-10 h-10 ${color}`} />;
      case 'user-alt':
        return <FaUserAlt className={`w-10 h-10 ${color}`} />;
      case 'user-tie':
        return <FaUserTie className={`w-10 h-10 ${color}`} />;
      case 'user-ninja':
        return <FaUserNinja className={`w-10 h-10 ${color}`} />;
      case 'user-astronaut':
        return <FaUserAstronaut className={`w-10 h-10 ${color}`} />;
      case 'user-fill':
        return <RiUser3Fill className={`w-10 h-10 ${color}`} />;
      case 'user-star':
        return <RiUserStarFill className={`w-10 h-10 ${color}`} />;
      case 'user-heart':
        return <RiUserHeartFill className={`w-10 h-10 ${color}`} />;
      case 'user-smile':
        return <RiUserSmileFill className={`w-10 h-10 ${color}`} />;
      default:
        return <FaUserCircle className={`w-10 h-10 ${color}`} />;
    }
  };

  return (
    <div className="flex items-center justify-center">
      {renderIcon()}
    </div>
  );
};

// Animation variants
const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 0.5,
      ease: "easeOut" 
    } 
  }
};

const slideInLeftVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.7,
      ease: "easeOut" 
    } 
  }
};

const slideInRightVariant = {
  hidden: { opacity: 0, x: 100 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.7,
      ease: "easeOut" 
    } 
  }
};

const slideUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5,
      ease: "easeOut" 
    } 
  }
};

const staggerContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Star rating component
const StarRating = ({ rating, setRating }) => {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => setRating && setRating(star)}
          className={`${
            star <= (setRating ? rating : rating) 
              ? "text-amber-500" 
              : "text-gray-300"
          } text-2xl focus:outline-none transition-colors`}
        >
          ★
        </button>
      ))}
    </div>
  );
};

// Add this near the top of your component, outside the Reviews function
const IS_ADMIN_MODE = false; // Set to true only when you need admin functions

const Reviews = () => {
  // State for new review form
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(5);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef(null);

  // State for reviews display with localStorage persistence
  const [reviews, setReviews] = useState([]);
  const [filter, setFilter] = useState('all');

  // Add a ref for the reviews section
  const reviewsGridRef = useRef(null);

  // Load reviews from localStorage on initial render
  useEffect(() => {
    // Add this check to make sure we don't override localStorage if it already has data
    const savedReviews = localStorage.getItem('cafeReviews');
    
    if (savedReviews) {
      try {
        // If we have saved reviews, use them
        const parsedReviews = JSON.parse(savedReviews);
        setReviews(parsedReviews);
      } catch (error) {
        console.error('Error parsing saved reviews:', error);
        // If there's an error parsing, use default testimonials
        setReviews(TESTIMONIALS);
        localStorage.setItem('cafeReviews', JSON.stringify(TESTIMONIALS));
      }
    } else {
      // Otherwise, use the default testimonials and save to localStorage
      setReviews(TESTIMONIALS);
      localStorage.setItem('cafeReviews', JSON.stringify(TESTIMONIALS));
    }
  }, []);

  // Save reviews to localStorage whenever they change - make sure this works properly
  useEffect(() => {
    // Only save if we actually have reviews to save and they're not empty
    if (reviews && reviews.length > 0) {
      localStorage.setItem('cafeReviews', JSON.stringify(reviews));
    }
  }, [reviews]);

  // Handle form submission - update to use icon types and colors
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Add new review to the list with random avatar color and icon
      const newReview = {
        name,
        quote: review,
        rating,
        iconColor: getRandomAvatarColor(),
        iconType: getRandomIconType(),
        date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      };
      
      // Update reviews state
      const updatedReviews = [newReview, ...reviews];
      setReviews(updatedReviews);
      
      // Reset form
      setName('');
      setReview('');
      setRating(5);
      setSubmitting(false);
      setSuccess(true);
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000);
    }, 1000);
  };

  const filteredReviews = filter === 'all' 
    ? reviews 
    : reviews.filter(review => review.rating === parseInt(filter));

  // Handle filter change with scroll adjustment
  const handleFilterChange = (e) => {
    const newFilter = e.target.value;
    setFilter(newFilter);
    
    // Add a small delay to allow the filtered results to render
    setTimeout(() => {
      // Scroll to the reviews grid when filter changes
      if (reviewsGridRef.current) {
        reviewsGridRef.current.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  // Add these functions to your Reviews component
  const exportReviews = () => {
    const reviews = localStorage.getItem('cafeReviews');
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(reviews);
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "coffee_kala_reviews.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const importReviews = (event) => {
    const fileReader = new FileReader();
    fileReader.readAsText(event.target.files[0], "UTF-8");
    fileReader.onload = e => {
      try {
        const reviews = JSON.parse(e.target.result);
        setReviews(reviews);
        localStorage.setItem('cafeReviews', JSON.stringify(reviews));
        alert("Reviews imported successfully!");
      } catch (error) {
        console.error("Error importing reviews:", error);
        alert("Error importing reviews. Please check the file format.");
      }
    };
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-medium bg-gradient-to-r from-amber-800 via-amber-700 to-amber-900 bg-clip-text text-transparent mb-4"
            variants={slideUpVariant}
          >
            Customer Reviews
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg"
            variants={slideUpVariant}
          >
            We value your feedback! Read what our customers have to say about their experience at Coffee Kala.
          </motion.p>
        </motion.div>

        {/* Review Form Section */}
        <motion.div 
          className="bg-[#F9F5F0] rounded-xl p-6 sm:p-8 lg:p-10 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={slideInLeftVariant}
        >
          <h3 className="text-2xl sm:text-3xl font-medium text-amber-800 mb-6">Share Your Experience</h3>
          
          {success ? (
            <motion.div 
              className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="block sm:inline">Thank you for your review!</span>
            </motion.div>
          ) : null}
          
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="rating" className="block text-gray-700 mb-2">Rating</label>
              <StarRating rating={rating} setRating={setRating} />
            </div>
            
            <div>
              <label htmlFor="review" className="block text-gray-700 mb-2">Your Review</label>
              <textarea
                id="review"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                required
                rows={5}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                placeholder="Tell us about your experience..."
              />
            </div>
            
            <button
              type="submit"
              disabled={submitting}
              className={`px-6 py-3 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-colors ${
                submitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {submitting ? "Submitting..." : "Submit Review"}
            </button>
          </form>
        </motion.div>

        {/* Reviews Display Section - update to use user icons */}
        <motion.div
          ref={reviewsGridRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={slideInRightVariant}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center justify-between mb-8">
            <h3 className="text-2xl sm:text-3xl font-medium text-amber-800">Customer Feedback</h3>
            
            {/* Updated filter controls */}
            <div className="flex items-center space-x-2 mt-4 sm:mt-0">
              <span className="text-gray-600">Filter by:</span>
              <select 
                value={filter} 
                onChange={handleFilterChange}
                className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              >
                <option value="all">All Ratings</option>
                <option value="5">5 Stars</option>
                <option value="4">4 Stars</option>
                <option value="3">3 Stars</option>
                <option value="2">2 Stars</option>
                <option value="1">1 Star</option>
              </select>
            </div>
          </div>
          
          {/* Reviews grid with user icons */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[300px]"
            variants={staggerContainerVariant}
          >
            {filteredReviews.length > 0 ? (
              filteredReviews.map((review, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  variants={slideUpVariant}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center mb-4">
                    {/* Use the updated UserAvatar component */}
                    <UserAvatar 
                      iconType={review.iconType} 
                      color={review.iconColor} 
                    />
                    <div className="ml-4">
                      <h4 className="font-medium text-gray-900">{review.name}</h4>
                      <p className="text-gray-500 text-sm">{review.date}</p>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <StarRating rating={review.rating} />
                  </div>
                  
                  <p className="text-gray-600 italic">"{review.quote}"</p>
                </motion.div>
              ))
            ) : (
              <motion.p 
                className="text-gray-500 col-span-full text-center py-8"
                variants={fadeInVariant}
                initial="hidden"
                animate="visible"
              >
                No reviews match your filter. Try adjusting your criteria.
                <br />
                <button 
                  onClick={() => setFilter('all')} 
                  className="mt-4 text-amber-700 underline"
                >
                  Show all reviews
                </button>
              </motion.p>
            )}
          </motion.div>
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          className="mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2, margin: "100px 0px" }}
          variants={slideUpVariant}
        >
          <ContactUs />
        </motion.div>

        {/* Admin Functions - only visible when IS_ADMIN_MODE is true */}
        {IS_ADMIN_MODE && (
          <div className="mt-8 border-t pt-4 text-sm text-gray-500">
            <p>Admin Functions:</p>
            <button onClick={exportReviews} className="text-amber-700 underline mr-4">
              Export Reviews
            </button>
            <label className="text-amber-700 underline cursor-pointer">
              Import Reviews
              <input
                type="file"
                accept=".json"
                className="hidden"
                onChange={importReviews}
              />
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reviews;
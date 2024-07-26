import React from 'react';

const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Success is not how high you have climbed, but how you make a positive difference to the world.",
    author: "Roy T. Bennett",
  },
  {
    text: "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs",
  },
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
];

const MotivationalQuotes = () => {
  return (
    <div className="motivational-quotes">
      <h2>Motivational Quotes</h2>
      <div className="quotes-container">
        {quotes.map((quote, index) => (
          <div key={index} className="quote-card">
            <p className="quote-text">"{quote.text}"</p>
            <p className="quote-author">- {quote.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MotivationalQuotes;

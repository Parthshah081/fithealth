// TestimonialsSection.js
import React from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = ({ testimonials }) => {
  return (
    <section className="testimonials">
      <h2>What Our Patients Say</h2>
      <div className="testimonial-list">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <p>{testimonial.comment}</p>
            <p className="author">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;

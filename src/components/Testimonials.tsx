import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Friend Circle helped us secure our seed funding in record time. The platform's reach and professional network are unmatched in Nigeria.",
      author: "Sarah Okonjo",
      role: "Founder & CEO",
      company: "TechPay Nigeria",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      quote: "As an investor, I've found some of my best performing investments through Friend Circle. The quality of startups and due diligence support is excellent.",
      author: "Michael Adebayo",
      role: "Managing Partner",
      company: "Lagos Angels Network",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">What Our Community Says</h2>
          <p className="mt-4 text-lg text-gray-600">
            Hear from successful startups and investors who've found value in our platform
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm p-8 relative"
            >
              <div className="flex items-start gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-gray-900 font-medium">{testimonial.quote}</p>
                  <div className="mt-4">
                    <p className="font-semibold text-indigo-600">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
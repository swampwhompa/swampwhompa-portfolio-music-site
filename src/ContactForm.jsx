import React from 'react';
import emailjs from '@emailjs/browser';

function ContactForm({ setCurrentPage }) {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [description, setDescription] = React.useState('');

    const [formSubmitted, setFormSubmitted] = React.useState(false);

    const handleSubmit = (e) => {
      e.preventDefault(); // Stop the page from reloading
  
      // Check if fields are empty
      if (!name || !email || !description) {
        alert('Please fill out all fields');
        return;
      }

        // Prepare the data to send
      const templateParams = {
        from_name: name,
        reply_to: email,
        message: description
      };

      // Send via EmailJS
      emailjs.send(
        'service_oh1ycbx',    
        'template_67kgqy8',    
        templateParams,
        'prRP9HDYLPRhK6iVl'      
      )
      .then(() => {
        // Success! Show the thank you message
        setFormSubmitted(true);
      })
      .catch((error) => {
        // Something went wrong
        alert('Failed to send message. Please try again.');
        console.error('EmailJS error:', error);
      });
    };

    return (
        <div className="relative z-10 min-h-screen p-8 flex items-center justify-center">
            <div className="max-w-2xl w-full">
      
              {/* Show form OR success message based on formSubmitted state */}
              {!formSubmitted ? (
                // THE FORM
                <div className="glass-button p-12 animate-fadeIn">
                  <h1 className="font-heading text-5xl font-bold text-white mb-4 drop-shadow-lg">
                    Get in Touch
                  </h1>
                  <p className="font-body text-lg text-white/70 mb-8 drop-shadow-md">
                    Let's talk about your project
                  </p>
          
                  {/* The actual form element */}
                  <form onSubmit={handleSubmit} className="space-y-6">
            
                    {/* Name field */}
                    <div>
                      <label className="font-body text-white font-semibold mb-2 block drop-shadow-md">
                        Name *
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white font-body focus:outline-none focus:border-yellow transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    {/* Email field */}
                    <div>
                      <label className="font-body text-white font-semibold mb-2 block drop-shadow-md">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white font-body focus:outline-none focus:border-yellow transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    {/* Description field */}
                    <div>
                      <label className="font-body text-white font-semibold mb-2 block drop-shadow-md">
                        Project Description *
                      </label>
                      <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows="6"
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white font-body focus:outline-none focus:border-yellow transition-colors resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    {/* Submit button */}
                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-yellow text-text font-body font-bold rounded-lg hover:bg-yellow/90 transition-colors"
                    >
                      Send Message
                    </button>
            
                  </form>
                </div>
              ) : (
                // SUCCESS MESSAGE
                <div className="glass-button p-12 text-center animate-fadeIn">
                  <h2 className="font-heading text-4xl font-bold text-white mb-4 drop-shadow-lg">
                    Thanks for reaching out!
                  </h2>
                  <p className="font-body text-xl text-white/70 mb-8 drop-shadow-md">
                    I'll get back to you soon to discuss your project further.
                  </p>
                  <button
                    onClick={() => setCurrentPage('design')}
                    className="px-8 py-4 bg-yellow text-text font-body font-bold rounded-lg hover:bg-yellow/90 transition-colors"
                  >
                    Back to Portfolio
                  </button>
                </div>
              )}
      
            </div>
          </div>
        );
}

export default ContactForm;
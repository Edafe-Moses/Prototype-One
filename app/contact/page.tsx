'use client';

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#F5F1ED]">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          Connect With Us
        </h1>
        
        <div className="text-center mb-12">
          <p className="text-xl text-gray-600 leading-relaxed">
            Have a question, feedback, or want to collaborate with The Wealth Circle Podcast?
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Email:</h3>
                <a 
                  href="mailto:info@wealthcirclepodcast.com" 
                  className="text-[#E87722] hover:underline text-lg"
                >
                  info@wealthcirclepodcast.com
                </a>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Social Media:</h3>
                <div className="space-y-2">
                  <div>
                    <a href="#" className="text-[#E87722] hover:underline">
                      Instagram: @wealthcirclepodcast
                    </a>
                  </div>
                  <div>
                    <a href="#" className="text-[#E87722] hover:underline">
                      TikTok / X: @wealthcirclepodcast
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E87722] focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E87722] focus:border-transparent"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E87722] focus:border-transparent"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#E87722] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#d66a1e] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
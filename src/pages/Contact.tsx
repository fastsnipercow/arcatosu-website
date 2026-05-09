import { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <section id="contact" className="py-16 md:py-24 px-6 bg-surface-container/30 border-y border-outline-variant/10 min-h-screen">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {/* Left Column: Info & Board Members */}
          <div>
            <h2 className="text-4xl text-primary font-extrabold tracking-tight mb-6 font-display">Contact Us</h2>
            <p className="text-xl text-on-surface mb-10 leading-relaxed">
              Contact us today to learn about how you can help our athletes!
            </p>

            <h3 className="text-xl font-bold mb-6 font-display">
              Alpine Race Club at OSU Booster Club<br />
              2025-2026 Board Members
            </h3>

            <div className="space-y-4 text-on-surface">
              <p><span className="font-bold">President:</span> [First Last]</p>
              <p><span className="font-bold">Vice President:</span> [First Last]</p>
              <p><span className="font-bold">Secretary:</span> [First Last]</p>
              <p><span className="font-bold">Treasurer:</span> [First Last]</p>
              <p><span className="font-bold">Media Manager:</span> [First Last]</p>
              <p><span className="font-bold">Volunteer Coordinators:</span> [First Last] and [First Last]</p>
              <p><span className="font-bold">Scholarship Liason:</span> [First Last]</p>
              
              <div className="pt-4 space-y-4">
                <p><span className="font-bold">Email:</span> <a href="mailto:placeholder@example.com" className="hover:underline">placeholder@example.com</a></p>
                <p><span className="font-bold">Find us on Facebook:</span> <a href="#" className="hover:underline">Alpine Race Club at OSU Booster Club</a></p>
                <p><span className="font-bold">Find us on Instagram:</span> <a href="#" className="hover:underline">@osu.alpine</a></p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm text-on-surface mb-2">Name</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-on-surface-variant mb-1">First Name (required)</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-2 bg-white border border-outline-variant/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-on-surface-variant mb-1">Last Name (required)</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-2 bg-white border border-outline-variant/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm text-on-surface mb-1">Email (required)</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-4 py-2 bg-white border border-outline-variant/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>

              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="newsletter" 
                  className="w-4 h-4 rounded-sm border-outline-variant/30 text-primary focus:ring-primary/20"
                />
                <label htmlFor="newsletter" className="text-sm text-on-surface-variant">Sign up for news and updates</label>
              </div>

              <div>
                <label className="block text-sm text-on-surface mb-1">Message (required)</label>
                <textarea 
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-white border border-outline-variant/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-y"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="px-8 py-2 bg-white border border-outline-variant hover:bg-surface-container transition-colors rounded-sm text-on-surface font-medium"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

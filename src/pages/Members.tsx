import { useEffect } from 'react';

export default function Members() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section className="py-16 md:py-24 px-6 relative bg-white">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-display font-extrabold tracking-tight mb-6">
            $210 Team Dues
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed">
            Dues go straight into team funds, which lower every race fee for the whole team.
          </p>
        </div>

        <div className="space-y-6">
          {/* Zelle */}
          <div className="bg-surface-container/30 border border-outline-variant/20 p-8 rounded-xl text-left">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
              <h2 className="text-2xl font-bold font-display">Zelle</h2>
              <span className="text-2xl font-bold font-display text-primary">$200</span>
            </div>
            <p className="text-on-surface mb-6">
              200 dollars required.
            </p>
            <a
              href="https://enroll.zellepay.com/qr-codes?data=eyJuYW1lIjoiQWxwaW5lIFJhY2luZyBhdCBPU1UiLCJ0b2tlbiI6ImFscGluZS1yYWNpbmctYXQtb3N1In0="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-8 py-3 bg-primary text-on-primary text-base font-bold rounded-full shadow hover:bg-primary/90 transition-colors"
            >
              Pay with Zelle
            </a>
          </div>

          {/* PayPal / Venmo / Apple Pay */}
          <div className="bg-surface-container/30 border border-outline-variant/20 p-8 rounded-xl text-left">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
              <h2 className="text-2xl font-bold font-display">Paypal / Venmo / Apple Pay</h2>
              <span className="text-2xl font-bold font-display text-primary">$210</span>
            </div>
            <p className="text-on-surface mb-6">
              Pay $210 online via PayPal, Venmo, or Apple Pay.
            </p>
            <a
              href="https://www.paypal.com/ncp/payment/ZU2DAKM2K4SXA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-8 py-3 bg-primary text-on-primary text-base font-bold rounded-full shadow hover:bg-primary/90 transition-colors"
            >
              Pay with PayPal / Venmo / Apple Pay
            </a>
          </div>

          {/* Cash or Check */}
          <div className="bg-surface-container/30 border border-outline-variant/20 p-8 rounded-xl text-left">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
              <h2 className="text-2xl font-bold font-display">Cash or Check</h2>
              <span className="text-2xl font-bold font-display text-primary">$200</span>
            </div>
            <p className="text-on-surface leading-relaxed mb-2">
              You can also pay with cash or a check during the next meeting.
            </p>
            <p className="text-on-surface-variant">
              Message Cooper Tillson
              to be able to create a meeting time to pay dues if the main meeting does not work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

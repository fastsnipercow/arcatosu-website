export default function Donate() {

  return (
    <>
      {/* Donations & Non-Profit Info Section */}
      <section className="py-16 md:py-24 px-6 relative bg-white">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-display font-extrabold tracking-tight mb-6">
            Support Our Athletes
          </h1>
          <p className="text-xl text-on-surface-variant mb-10 leading-relaxed">
            As a registered non-profit organization, your contributions directly support the Alpine Race Club at OSU, enabling specialized coaching, equipment, and travel for our next generation of racers.
          </p>
          
          <div className="bg-surface-container/30 border border-outline-variant/20 p-8 rounded-xl shadow-sm mb-12 text-left">
            <h3 className="text-2xl font-bold font-display mb-4">About Our Non-Profit Status</h3>
            <p className="text-on-surface mb-4">
              Alpine Race Club at OSU Booster Club is a recognized 501(c)(3) tax-exempt non-profit organization. All donations are tax-deductible to the extent permitted by law.
            </p>
            <p className="text-on-surface">
              Your donations go toward assisting athletes with racing fees, providing training equipment, covering transportation costs to regional mountains, and sustaining a high-level coaching staff.
            </p>
          </div>

          <a 
            href="#" 
            className="inline-flex justify-center items-center px-12 py-5 bg-primary text-on-primary text-2xl font-bold rounded-full shadow-lg hover:bg-primary/90 hover:-translate-y-1 transition-all mx-auto"
          >
            Donate Here
          </a>
        </div>
      </section>

    </>
  )
}

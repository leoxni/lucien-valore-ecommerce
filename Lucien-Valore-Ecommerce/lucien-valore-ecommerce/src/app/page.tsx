export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-6xl font-bold text-neutral-900 mb-4">
            Lucien Valore
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Exquisite luxury goods crafted with uncompromising attention to detail.
            Experience the pinnacle of sophisticated elegance.
          </p>
        </header>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">Timepieces</h3>
            <p className="text-neutral-600">Swiss-crafted watches that define timeless elegance</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">Accessories</h3>
            <p className="text-neutral-600">Handcrafted leather goods and signature pieces</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">Collections</h3>
            <p className="text-neutral-600">Limited edition luxury items for discerning clientele</p>
          </div>
        </section>

        <div className="text-center">
          <a
            href="/api/products"
            className="inline-block bg-neutral-900 text-white px-8 py-3 rounded-lg hover:bg-neutral-800 transition-colors"
          >
            View Product API
          </a>
        </div>
      </div>
    </div>
  );
}

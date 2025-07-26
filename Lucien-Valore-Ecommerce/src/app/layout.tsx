import { CartProvider } from "./CartContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="selection:bg-black/90 selection:text-white bg-lux-white text-lux-black font-sans min-h-screen">
        <CartProvider>
          {/* --- LUXURY NAV --- */}
          <nav className="w-full border-b border-zinc-200/60 px-8 py-5 flex items-center justify-between bg-lux-white z-20 relative">
            <span className="font-serif text-2xl tracking-wide font-bold lux-gold">Lucien Valore</span>
            {/* TODO: Language/Currency toggle, Cart button */}
            <div className="flex items-center gap-4">
              {/* Placeholder for Language/Currency toggle */}
              <div className="hidden md:block">
                {/* Language/Currency toggle to be implemented */}
              </div>
              {/* Floating Cart Button (desktop: top-right, mobile: bottom) */}
              <div className="relative">
                <div
                  id="floating-cart-entry"
                  className="hidden md:block fixed top-6 right-8 z-30"
                ></div>
              </div>
            </div>
          </nav>
          {/* Floating Cart Button for mobile (bottom) */}
          <div
            id="floating-cart-entry"
            className="md:hidden fixed bottom-6 right-6 z-30"
          ></div>
          {/* CartDrawer modal will mount via portal */}
          <main className="min-h-[70vh]">{children}</main>
          {/* --- LUXURY FOOTER --- */}
          <footer className="border-t border-zinc-200/60 mt-12 bg-lux-white p-10 pt-14 pb-16">
            <div className="flex flex-wrap justify-between gap-10">
              <div>
                <h4 className="font-serif text-xl mb-2">Lucien Valore</h4>
                <p className="text-sm opacity-70 w-60 max-w-full">Ultra-luxury designer fashion for a new era. #LucienValore</p>
                <div className="mt-4 flex items-center gap-2">
                  {/* Socials, live chat, etc */}
                </div>
              </div>
              <div>{/* Support & Links */}</div>
              <div>
                {/* Newsletter Signup, Country/Language selectors */}
                {/* Placeholder for Language/Currency toggle */}
                <div className="mt-4">
                  {/* Language/Currency toggle to be implemented */}
                </div>
              </div>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  )
}

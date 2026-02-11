export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 transition-all duration-300 group-hover:border-gold">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-gold"
                >
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M12 6V12L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <span className="font-serif text-xl tracking-wide text-foreground">
                Chronos
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The world{"'"}s premier luxury time travel agency. Crafting extraordinary
              temporal experiences since 2087.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-gold">
              Destinations
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {["Paris, 1889", "Florence, 1504", "Cretaceous Period", "Ancient Rome", "Edo Japan"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors duration-200 hover:text-gold"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-gold">
              Company
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {["About Us", "Our Technology", "Safety Protocols", "Careers", "Press"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors duration-200 hover:text-gold"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-gold">
              Contact
            </h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
              <li>concierge@chronos.voyage</li>
              <li>+1 (2087) 555-CHRONO</li>
              <li>Temporal District, New Geneva</li>
            </ul>
            <div className="mt-6 flex gap-3">
              {["X", "IG", "LI"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-xs text-muted-foreground transition-all duration-200 hover:border-gold/40 hover:text-gold"
                  aria-label={`Follow us on ${social}`}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; 2087 Chronos Voyages. All rights reserved across all timelines.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Temporal Liability"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  className="text-xs text-muted-foreground transition-colors duration-200 hover:text-gold"
                >
                  {link}
                </a>
              )
            )}
          </div>
        </div>
      </div>

      <div className="h-px w-full animate-shimmer" />
    </footer>
  )
}

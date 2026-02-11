export function Footer() {
  return (
    <footer id="contact" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <span className="font-serif text-lg tracking-wide text-foreground">
              Chronos
            </span>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              L{"'"}agence de voyage temporel la plus exclusive au monde.
            </p>
          </div>

          <div className="flex gap-14">
            <div>
              <h4 className="text-[11px] font-medium tracking-[0.3em] uppercase text-muted-foreground">
                Destinations
              </h4>
              <ul className="mt-3 flex flex-col gap-2">
                {["Paris, 1889", "Florence, 1504", "Cretace, -65M"].map((item) => (
                  <li key={item}>
                    <a
                      href="#destinations"
                      className="text-sm text-foreground/70 transition-colors duration-200 hover:text-foreground"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-medium tracking-[0.3em] uppercase text-muted-foreground">
                Contact
              </h4>
              <ul className="mt-3 flex flex-col gap-2 text-sm text-foreground/70">
                <li>concierge@chronos.voyage</li>
                <li>+33 1 87 65 43 21</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 md:flex-row">
          <p className="text-[11px] text-muted-foreground">
            2087 Chronos Voyages. Tous droits reserves.
          </p>
          <div className="flex gap-5">
            {["Confidentialite", "Conditions"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[11px] text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

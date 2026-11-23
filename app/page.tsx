
const categories = [
  {
    name: "Christmas Decor",
    subtitle: "Create a magical home",
    image:
      "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=1000",
    number: "01",
  },
  {
    name: "Gift Guides",
    subtitle: "Find something unforgettable",
    image:
      "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=1000",
    number: "02",
  },
  {
    name: "Cozy Living",
    subtitle: "Make every corner special",
    image:
      "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=1000",
    number: "03",
  },
];

const discoveries = [
  {
    title: "The Art of a Cozy Christmas",
    tag: "HOME & DECOR",
    image:
      "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=900",
  },
  {
    title: "Gifts Worth Giving",
    tag: "GIFT EDIT",
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=900",
  },
  {
    title: "A Little Holiday Magic",
    tag: "SEASONAL STYLE",
    image:
      "https://images.unsplash.com/photo-1512909006721-3d6018887383?w=900",
  },
];


function ArrowIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M5 15 15 5M6 5h9v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f3ea] text-[#17291f]">

      {/* ANNOUNCEMENT */}
      <div className="bg-[#14271e] px-4 py-2 text-center text-[9px] tracking-[0.25em] text-[#e4c995] sm:text-[10px]">
        THE ART OF MAKING EVERY SEASON SPECIAL
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 px-4 pt-4 sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/70 bg-white/65 px-5 py-4 shadow-lg shadow-black/5 backdrop-blur-2xl md:px-8">
          <a href="#" className="leading-none">
            <span className="block font-serif text-2xl italic tracking-tight text-[#244632] md:text-3xl">
              Seasonal
            </span>
            <span className="mt-1 block text-center text-[9px] tracking-[0.42em] text-[#b28b48]">
              FINDS
            </span>
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-9 text-[10px] tracking-[0.17em] md:flex">
            <a href="#home" className="transition hover:text-[#b28b48]">HOME</a>
            <a href="#categories" className="transition hover:text-[#b28b48]">EXPLORE</a>
            <a href="#discoveries" className="transition hover:text-[#b28b48]">GIFT GUIDES</a>
            <a href="#about" className="transition hover:text-[#b28b48]">OUR STORY</a>
          </nav>

          <a
            href="#categories"
            className="hidden items-center gap-2 rounded-full border border-[#b28b48]/60 px-5 py-3 text-[9px] tracking-[0.15em] transition hover:bg-[#b28b48] hover:text-white sm:inline-flex"
          >
            DISCOVER <ArrowIcon />
          </a>

          <details className="group relative md:hidden">
            <summary
              aria-label="Open navigation menu"
              className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-[#b28b48]/40 bg-white/40 text-[#244632] transition hover:bg-white/80 [&::-webkit-details-marker]:hidden"
            >
              <MenuIcon />
            </summary>
            <nav
              aria-label="Mobile navigation"
              className="absolute right-0 top-[calc(100%+14px)] z-50 flex w-56 flex-col gap-1 rounded-2xl border border-white/70 bg-[#f7f3ea]/95 p-3 text-[10px] tracking-[0.16em] text-[#17291f] shadow-xl shadow-black/10 backdrop-blur-2xl"
            >
              <a href="#home" className="rounded-xl px-4 py-3 transition hover:bg-white/70">HOME</a>
              <a href="#categories" className="rounded-xl px-4 py-3 transition hover:bg-white/70">EXPLORE</a>
              <a href="#discoveries" className="rounded-xl px-4 py-3 transition hover:bg-white/70">GIFT GUIDES</a>
              <a href="#about" className="rounded-xl px-4 py-3 transition hover:bg-white/70">OUR STORY</a>
              <a href="#categories" className="mt-1 flex items-center justify-between rounded-xl bg-[#14271e] px-4 py-3 text-[#e4c995]">DISCOVER <ArrowIcon /></a>
            </nav>
          </details>
        </div>
      </header>

      {/* HERO */}

      {/* HERO */}
      <section id="home" className="relative mx-auto mt-5 max-w-[1600px] px-3 sm:px-8">
        <div className="relative min-h-[680px] overflow-hidden rounded-[24px] bg-[#14271e] sm:rounded-[28px] lg:min-h-[700px]">
          <div
            className="absolute inset-0 bg-cover bg-[center_40%]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=2000')",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#09170f]/90 via-[#102219]/60 to-[#102219]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09170f]/65 via-transparent to-transparent" />

          <div className="relative z-10 flex min-h-[680px] flex-col justify-center px-6 py-14 sm:px-10 lg:min-h-[700px] lg:justify-center lg:px-20 lg:py-20">

            <div className="max-w-2xl">
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d8b978]" />
                <span className="text-[9px] tracking-[0.22em] text-[#e7ca91] sm:text-[10px] sm:tracking-[0.3em]">
                  THE HOLIDAY COLLECTION · 2026
                </span>
              </div>

              <h1 className="max-w-[650px] font-serif text-[clamp(2.8rem,11vw,4.5rem)] leading-[1.04] tracking-tight text-white lg:text-8xl">
                Discover
                <br />
                the beauty of
                <br />
                <span className="italic text-[#e4c995]">every season.</span>
              </h1>

              <p className="mt-6 max-w-md text-[13px] leading-6 text-white/85 sm:text-sm sm:leading-7 lg:text-base">
                Thoughtful finds, beautiful spaces and inspiring ideas
                to make every celebration feel extraordinary.
              </p>

              <a
                href="#categories"
                className="mt-8 inline-flex items-center justify-center gap-4 rounded-full bg-[#e4c995] px-6 py-4 text-[9px] tracking-[0.15em] text-[#14271e] transition hover:bg-white sm:px-7 sm:text-[10px]"
              >
                EXPLORE OUR WORLD <ArrowIcon className="h-4 w-4" />
              </a>
            </div>

            {/* GLASS PANEL */}
            <div className="mt-9 w-full max-w-[300px] rounded-2xl border border-white/30 bg-white/10 p-5 text-white shadow-2xl backdrop-blur-2xl lg:absolute lg:bottom-8 lg:right-8 lg:mt-0 lg:max-w-[270px] lg:p-6">
              <p className="text-[9px] tracking-[0.25em] text-[#e4c995]">
                A SEASON TO REMEMBER
              </p>

              <p className="mt-3 font-serif text-2xl italic leading-tight sm:text-3xl">
                Little things.
                <br />
                Lasting memories.
              </p>

              <div className="mt-5 h-px bg-white/25" />

              <p className="mt-4 text-xs leading-6 text-white/75">
                Inspiration for the moments that matter most.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-5 py-24 text-center md:py-32">
        <p className="text-[10px] tracking-[0.35em] text-[#a7864d]">
          CURATED WITH LOVE
        </p>
        <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
          A world of beautiful
          <br />
          <span className="italic text-[#72836b]">little discoveries.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#77766d]">
          From seasonal home inspiration to thoughtful gifts,
          discover ideas that bring warmth, beauty and meaning
          to every occasion.
        </p>
      </section>

      {/* CATEGORY EDITORIAL CARDS */}
      <section id="categories" className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-[10px] tracking-[0.3em] text-[#a7864d]">
              EXPLORE OUR WORLD
            </p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">
              Find your inspiration
            </h2>
          </div>
          <span className="hidden text-xs tracking-widest text-[#a7864d] sm:block">
            THE SEASONAL EDIT
          </span>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((item) => (
            <a
              href="#discoveries"
              key={item.name}
              className="group relative h-[430px] overflow-hidden rounded-[22px] bg-[#243b2d]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09170f]/90 via-transparent to-black/10" />

              <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[9px] tracking-widest text-white backdrop-blur-xl">
                COLLECTION {item.number}
              </div>

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/25 bg-white/10 p-5 text-white backdrop-blur-xl transition group-hover:bg-white/20">
                <p className="text-xs text-white/75">{item.subtitle}</p>
                <div className="mt-2 flex items-center justify-between">
                  <h3 className="font-serif text-2xl">{item.name}</h3>
                  <ArrowIcon className="h-5 w-5" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* DARK EDITORIAL SECTION */}
      <section className="relative overflow-hidden bg-[#14271e] px-5 py-24 text-white md:py-32">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#8d7847]/15 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#78917a]/15 blur-[100px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-[10px] tracking-[0.3em] text-[#e4c995]">
              THE SEASONAL JOURNAL
            </p>
            <h2 className="mt-6 font-serif text-5xl leading-tight md:text-6xl">
              Inspiration
              <br />
              for a life
              <br />
              <span className="italic text-[#e4c995]">beautifully lived.</span>
            </h2>
            <p className="mt-7 max-w-md text-sm leading-7 text-white/65">
              Discover our latest edits, seasonal styling ideas
              and thoughtful finds to make every moment special.
            </p>
            <a
              href="#discoveries"
              className="mt-9 inline-flex items-center gap-4 rounded-full border border-white/30 bg-white/10 px-6 py-4 text-[10px] tracking-[0.16em] backdrop-blur-xl transition hover:bg-white/20"
            >
              EXPLORE THE JOURNAL <ArrowIcon />
            </a>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div
              className="h-[470px] rounded-[28px] bg-cover bg-center shadow-2xl"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=1000')",
              }}
            />
            <div className="absolute -bottom-7 -left-5 max-w-[260px] rounded-2xl border border-white/25 bg-white/10 p-6 text-white shadow-xl backdrop-blur-2xl sm:-left-12">
              <p className="text-[9px] tracking-[0.25em] text-[#e4c995]">
                OUR PHILOSOPHY
              </p>
              <p className="mt-3 font-serif text-2xl italic">
                Beauty lives in the details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DISCOVERIES */}
      <section id="discoveries" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="mb-12 text-center">
          <p className="text-[10px] tracking-[0.3em] text-[#a7864d]">
            HANDPICKED INSPIRATION
          </p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">
            The latest discoveries
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {discoveries.map((item, index) => (
            <article key={item.title} className="group">
              <div className="relative h-[360px] overflow-hidden rounded-[22px]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full border border-white/40 bg-white/15 px-4 py-2 text-[9px] tracking-widest text-white backdrop-blur-xl">
                  {item.tag}
                </span>
              </div>
              <p className="mt-6 text-[10px] tracking-[0.2em] text-[#a7864d]">
                EDITION 0{index + 1}
              </p>
              <h3 className="mt-3 font-serif text-2xl leading-snug">
                {item.title}
              </h3>
              <a
                href="#about"
                className="mt-5 inline-flex items-center gap-3 border-b border-[#b28b48] pb-2 text-[10px] tracking-[0.16em]"
              >
                READ THE STORY <ArrowIcon />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="px-5 pb-24">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[30px] bg-[#14271e] px-6 py-20 text-center text-white">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(228,201,149,0.20),transparent_60%)]" />
          <div className="relative">
            <p className="text-[10px] tracking-[0.3em] text-[#e4c995]">
              A LITTLE INSPIRATION, DELIVERED
            </p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl">
              Make room for beautiful things.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/65">
              Discover seasonal inspiration, thoughtful gift ideas
              and our latest finds.
            </p>
            <a
              href="#home"
              className="mt-8 inline-block rounded-full border border-[#e4c995]/60 bg-white/10 px-8 py-4 text-[10px] tracking-[0.18em] backdrop-blur-xl transition hover:bg-[#e4c995] hover:text-[#14271e]"
            >
              EXPLORE SEASONAL FINDS
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="about" className="border-t border-[#e4ddcf] px-5 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-serif text-3xl italic text-[#244632]">
              Seasonal Finds
            </p>
            <p className="mt-2 text-[9px] tracking-[0.25em] text-[#a7864d]">
              DECOR · GIFTS · INSPIRATION
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-7 text-[10px] tracking-[0.12em] text-[#77766d]">
            <a href="#home">HOME</a>
            <a href="#categories">EXPLORE</a>
            <a href="#discoveries">JOURNAL</a>
            <a href="#about">ABOUT</a>
          </div>

          <p className="text-[10px] text-[#99958b]">
            © 2026 SEASONAL FINDS
          </p>
        </div>
      </footer>
    </main>
  );
}
export default function AdminDashboardPage() {
  const sections = [
    {
      title: "Articles",
      description: "Create and organize seasonal guides and editorial content.",
      icon: "01",
      status: "Coming next",
    },
    {
      title: "Products",
      description: "Manage product photos, descriptions, prices and affiliate links.",
      icon: "02",
      status: "Coming next",
    },
    {
      title: "Collections",
      description: "Organize recommendations into seasonal categories.",
      icon: "03",
      status: "Coming next",
    },
    {
      title: "Analytics",
      description: "Review visits and product-link clicks when tracking is connected.",
      icon: "04",
      status: "Coming next",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#17291f]">
      <header className="border-b border-[#e4ddcf] bg-white/70 px-5 py-5 backdrop-blur-xl sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <a href="/" className="font-serif text-2xl italic text-[#244632]">Seasonal Finds</a>
          <form action="/api/admin/logout" method="POST">
            <button className="rounded-full border border-[#b28b48]/50 px-5 py-3 text-[10px] tracking-[0.15em] transition hover:bg-[#14271e] hover:text-white">
              SIGN OUT
            </button>
          </form>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <p className="text-[10px] tracking-[0.3em] text-[#a7864d]">YOUR WORKSPACE</p>
        <div className="mt-3 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <h1 className="font-serif text-4xl sm:text-5xl">Good to see you.</h1>
            <p className="mt-3 text-sm text-[#77766d]">Your Seasonal Finds control room.</p>
          </div>
          <span className="w-fit rounded-full border border-[#b28b48]/30 bg-white/60 px-4 py-2 text-[9px] tracking-[0.15em] text-[#8b7040]">
            ADMINISTRATOR
          </span>
        </div>

        <section className="mt-10 grid gap-4 sm:grid-cols-2">
          {sections.map((section) => (
            <article key={section.title} className="rounded-[22px] border border-white/80 bg-white/65 p-6 shadow-sm shadow-[#17291f]/5 backdrop-blur-xl sm:p-8">
              <div className="flex items-start justify-between">
                <span className="font-serif text-3xl italic text-[#b28b48]">{section.icon}</span>
                <span className="rounded-full bg-[#14271e]/5 px-3 py-2 text-[9px] tracking-[0.12em] text-[#77766d]">
                  {section.status}
                </span>
              </div>
              <h2 className="mt-8 font-serif text-2xl">{section.title}</h2>
              <p className="mt-2 max-w-sm text-sm leading-6 text-[#77766d]">{section.description}</p>
            </article>
          ))}
        </section>

        <div className="mt-8 rounded-[22px] bg-[#14271e] p-6 text-white sm:p-8">
          <p className="text-[10px] tracking-[0.25em] text-[#e4c995]">A NOTE ABOUT YOUR WORKSPACE</p>
          <p className="mt-3 max-w-2xl font-serif text-2xl leading-snug">
            Your private dashboard is ready. We’ll add content management tools one step at a time.
          </p>
        </div>
      </div>
    </main>
  );
}

export default function StatsSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
          <h2 className="text-4xl font-medium lg:text-5xl">
            Spark labs in numbers
          </h2>
          <p>
            We’ve built 200+ websites and apps, support 150,000+ monthly
            visitors, maintain 99.9% uptime, and help 60+ businesses grow
            through modern digital solutions.
          </p>
        </div>

        <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
          <div className="space-y-4">
            <div className="text-5xl font-bold">+1200</div>
            <p>Stars on GitHub</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">150 k</div>
            <p>Active Users</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">+200</div>
            <p>Powered Apps</p>
          </div>
        </div>
      </div>
    </section>
  );
}

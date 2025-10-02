import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Logo from "../logo";

export default function Testimonials() {
  return (
    <section className="py-16 md:py-32">
      <div className="px-4 lg:p-0 mx-auto max-w-6xl space-y-8 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-3xl space-y-6 text-center md:space-y-12">
          <h2 className="text-4xl font-medium lg:text-5xl">
            Built by innovators, loved by hundreds of clients
          </h2>
          <p>
            Greenspark Labs is more than just code. We power a full ecosystem —
            combining platforms, APIs, and tools to help developers and
            businesses innovate faster.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
          <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2  lg:row-span-2">
            <CardHeader>
              <Logo />
            </CardHeader>
            <CardContent>
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p>
                  We partnered with Greenspark Labs to modernize our website and
                  integrate APIs. The result was a sleek, fast site that
                  customers love — and the engagement metrics speak for
                  themselves.
                </p>

                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="/"
                      alt="Shekinah Tshiokufila"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>ST</AvatarFallback>
                  </Avatar>

                  <div>
                    <cite className="text-sm font-medium">
                      Shekinah Tshiokufila
                    </cite>
                    <span className="text-muted-foreground block text-sm">
                      CEO at Savanna Safari tours
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card className="md:col-span-2">
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p>
                  Thanks to Greenspark Labs, our app’s performance has improved
                  dramatically. Users love the speed, usability, and modern
                  design – working with them has been one of our best decisions.
                </p>

                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="/"
                      alt="Jonathan Yombo"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>JY</AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className="text-sm font-medium">
                      Jonathan Ochieng'
                    </cite>
                    <span className="text-muted-foreground block text-sm">
                      Business Owner, Chi Fashions
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p>
                  Great work on my portfolio. This is one of the best personal
                  website that I have seen so far!
                </p>

                <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="/"
                      alt="Yucel Faruksahan"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>YF</AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className="text-sm font-medium">Joshua Wanjohi</cite>
                    <span className="text-muted-foreground block text-sm">
                      Project Manager, Safaricom PLC
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card className="card variant-mixed">
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p>
                  Greenspark Labs turned our vague ideas into a polished, fully
                  functioning application.
                </p>

                <div className="grid grid-cols-[auto_1fr] gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="/"
                      alt="Rodrigo Aguilar"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>YF</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Mr George Nguri</p>
                    <span className="text-muted-foreground block text-sm">
                      Project Manager, Blue Capital
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

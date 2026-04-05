import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-[85svh] w-full min-w-0 max-w-full items-center overflow-hidden">
      <div className="absolute inset-0 z-0 min-w-0">
        <Image
          src="/images/image 3 1.png"
          alt="Way Gibb Industrial Hero"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto flex w-full min-w-0 max-w-full items-center px-4 py-16 sm:py-20 lg:py-24 sm:px-6 md:px-8">
        <div className="relative w-full min-w-0 max-w-3xl translate-y-4 sm:translate-x-4 sm:translate-y-8 md:translate-x-10 lg:translate-x-20">
          <div className="absolute -inset-x-2 -inset-y-6 -z-10 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-none sm:-inset-x-8 sm:-inset-y-8 sm:rounded-[2rem] md:-inset-x-16 md:-inset-y-12 lg:-inset-x-24 md:rounded-[3rem]" />

          <div className="text-white">
            <span
              className="mb-3 inline-block text-[10px] font-bold uppercase tracking-[0.15em] text-white drop-shadow-md sm:mb-4 sm:text-xs sm:tracking-[0.2em]"
              data-aos="fade-down"
              data-aos-duration="700"
              data-aos-delay="100"
            >
              DELIVERED RELIABLY
            </span>
            <h1
              className="mb-5 max-w-full break-words font-sans text-3xl font-extrabold leading-[1.1] tracking-tight text-white drop-shadow-lg sm:mb-8 sm:text-4xl md:text-5xl lg:text-6xl"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              Premium Food &{" "}
              <br className="hidden sm:inline" />
              Building Materials
            </h1>
            <p
              className="mb-6 max-w-sm text-sm font-bold leading-relaxed text-primary sm:mb-8 sm:max-w-md sm:text-base md:text-lg"
              data-aos="fade-up"
              data-aos-duration="750"
              data-aos-delay="320"
            >
              Waygibb Ltd supplies high-quality meat, poultry, and construction
              materials directly to customers through a seamless ordering system
              with instant delivery or scheduled pre-orders.
            </p>

            <p
              className="mb-8 max-w-xs text-xs font-semibold italic leading-relaxed text-primary/80 sm:mb-12 sm:max-w-sm sm:text-sm"
              data-aos="fade-up"
              data-aos-duration="750"
              data-aos-delay="420"
            >
              We don&apos;t connect you to suppliers we supply you directly and
              deliver to your doorstep.
            </p>

            <div
              className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-5"
              data-aos="fade-up"
              data-aos-duration="750"
              data-aos-delay="520"
            >
              <button
                type="button"
                className="w-full rounded-xl bg-white px-8 py-3 text-sm font-bold text-[#E53935] shadow-xl shadow-white/10 transition-all hover:bg-zinc-100 active:scale-95 sm:w-auto sm:px-10 sm:py-3.5 sm:text-base"
              >
                Order via App
              </button>
              <button
                type="button"
                className="w-full rounded-xl border border-white/10 bg-[#1E1A4B] px-8 py-3 text-sm font-bold text-white shadow-xl shadow-[#1E1A4B]/20 transition-all hover:bg-[#1E1A4B]/90 active:scale-95 sm:w-auto sm:px-10 sm:py-3.5 sm:text-base"
              >
                Schedule a Pre-Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

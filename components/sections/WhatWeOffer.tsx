import Image from "next/image";

const products = [
  {
    category: "Fresh Produce",
    title: "Fresh Meat",
    label: "Quality standards.",
    image: "/images/fresh-meat.png",
    link: "#",
  },
  {
    category: "Dependable delivery",
    title: "Building Materials",
    label: "Construction Materials",
    image: "/images/materials-supply.png",
    link: "#",
  },
  {
    category: "Quality for every participant",
    title: "Meat Sharing (Controlled Bulk System)",
    label: "Controlled Bulk System",
    image: "/images/Group 8.png",
    link: "#",
  },
];

export default function WhatWeOffer() {
  return (
    <section id="sell" className="bg-secondary py-10 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className="mb-10 max-w-3xl px-2 sm:mb-16"
          data-aos="fade-up"
          data-aos-duration="750"
        >
          <h2 className="text-2xl font-bold text-primary mb-4 tracking-tight sm:text-3xl md:text-4xl sm:mb-6">
            What We Offer, Our Products
          </h2>
          <p className="text-primary/70 text-sm leading-relaxed sm:text-base md:text-lg">
            Our unwavering commitment to you means we provide support and
            guidance from start to finish, ensuring a successful outcome every
            step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
          {products.slice(0, 2).map((product, idx) => (
            <div
              key={idx}
              className="group relative h-[260px] overflow-hidden rounded-2xl shadow-xl shadow-primary/5 transition-all duration-300 hover:shadow-2xl sm:h-[300px] md:h-[340px] lg:h-[380px]"
              data-aos="fade-up"
              data-aos-delay={idx * 120}
              data-aos-duration="800"
            >
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* White Label Pill */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                <span className="bg-white text-primary px-3 py-1.5 rounded-lg font-bold text-[10px] shadow-md sm:px-5 sm:py-2.5 sm:rounded-xl sm:text-xs">
                  {product.label}
                </span>
              </div>

              {/* Content Box */}
              <div className="absolute bottom-5 left-5 right-5 text-white sm:bottom-8 sm:left-8 sm:right-8">
                <span className="text-[10px] font-semibold text-white/80 mb-1 block tracking-wide sm:text-xs sm:mb-2">
                  {product.category}
                </span>
                <h3 className="text-xl font-extrabold mb-3 tracking-tight sm:text-2xl md:text-3xl sm:mb-5">
                  {product.title}
                </h3>
                <button className="bg-primary text-white px-5 py-2 rounded-full font-bold text-xs transition-all hover:bg-primary/90 active:scale-95 shadow-lg shadow-black/20 sm:px-8 sm:py-2.5 sm:text-sm">
                  Learn More
                </button>
              </div>
            </div>
          ))}

          {/* Full Width Card */}
          <div
            className="group relative col-span-1 mt-2 h-[300px] overflow-hidden rounded-2xl shadow-xl shadow-primary/5 transition-all duration-300 hover:shadow-2xl sm:mt-4 sm:h-[350px] md:col-span-2 md:h-[400px] lg:h-[440px]"
            data-aos="fade-up"
            data-aos-delay="280"
            data-aos-duration="850"
          >
            <Image
              src={products[2].image}
              alt={products[2].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-102"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            {/* White Label Pill */}
            <div className="absolute top-5 left-5 sm:top-8 sm:left-8">
              <span className="bg-white text-primary px-4 py-2 rounded-lg font-bold text-[10px] shadow-lg sm:px-6 sm:py-3 sm:rounded-xl sm:text-xs">
                {products[2].label}
              </span>
            </div>

            {/* Content Box */}
            <div className="absolute bottom-6 left-5 right-5 text-white max-w-2xl sm:bottom-10 sm:left-10">
              <span className="text-xs font-semibold text-white/80 mb-2 block tracking-wide sm:text-sm sm:mb-3">
                {products[2].category}
              </span>
              <h3 className="text-2xl font-extrabold mb-4 tracking-tight sm:text-3xl md:text-4xl sm:mb-8">
                {products[2].title}
              </h3>
              <button className="bg-primary text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all hover:bg-primary/90 active:scale-95 shadow-lg shadow-black/20 sm:px-10 sm:py-3 sm:text-base">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

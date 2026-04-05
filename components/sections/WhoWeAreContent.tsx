"use client";

import Image from "next/image";

const HERO_IMAGE = "/images/about-waygibb.jpg";
const TOP_TEAM_IMAGE = "/images/image 3 1.png";
const MISSION_IMG = "/images/mission.png";

export default function WhoWeAreContent() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative flex min-h-[min(55vh,420px)] w-full min-w-0 items-center justify-center overflow-hidden sm:min-h-[min(60vh,480px)] md:min-h-[min(65vh,560px)]"
        aria-labelledby="who-we-are-hero-heading"
      >
        <div className="absolute inset-0 z-0 min-w-0">
          <Image
            src={HERO_IMAGE}
            alt="Way Gibb warehouse and logistics"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#3b1578]/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3b1578]/50 via-transparent to-[#3b1578]/20" />
        </div>

        <div className="relative z-10 w-full min-w-0 px-4 py-16 text-center sm:px-6 sm:py-20 md:py-24">
          <h1
            id="who-we-are-hero-heading"
            className="text-3xl font-extrabold tracking-tight text-white drop-shadow-sm sm:text-4xl md:text-5xl lg:text-6xl"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Who We Are
          </h1>
          <p
            className="mx-auto mt-4 max-w-2xl text-base font-semibold text-white/95 sm:mt-5 sm:text-lg md:text-xl"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="80"
          >
            Premium Food &amp; Building Materials
          </p>
        </div>
      </section>

      {/* About Us & Core Philosophy Sections */}
      <section className="w-full bg-white py-14 sm:py-20 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">
          
          {/* Top Team Carrier */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div 
              className="order-2 lg:order-1 flex flex-col pt-4 lg:pt-0 lg:pr-8"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <span className="uppercase tracking-[0.2em] text-[#3b1578] font-bold text-xs sm:text-sm mb-2 block">
                ABOUT US
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1E1A4B] mb-5">
                Top Team Carrier
              </h2>
              
              <div className="bg-[#fcfafc] border-l-4 border-[#3b1578] p-5 sm:p-6 rounded-r-xl shadow-sm mb-6">
                <p className="font-bold text-[#1E1A4B] text-base sm:text-lg leading-snug">
                  We blend Sourcing, Processing, And Logistics — Ensuring Consistency, Quality, and Reliability.
                </p>
              </div>
              
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                Waygibb Ltd is a supply and distribution company focused on delivering essential goods directly to customers without intermediaries. Waygibb Ltd is a supply and distribution company focused on delivering essential goods directly to customers without intermediaries.
              </p>
            </div>
            
            <div 
              className="order-1 lg:order-2 relative"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <div className="relative aspect-[4/3] w-full max-w-[550px] mx-auto lg:ml-auto rounded-[2rem] overflow-hidden shadow-xl lg:-mr-4">
                <Image 
                  src={TOP_TEAM_IMAGE} 
                  fill 
                  className="object-cover object-top" 
                  alt="Way Gibb Top Team Carrier driver holding a tablet" 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              
              {/* Highlight Red Badge */}
              <div className="absolute -bottom-5 sm:-bottom-8 left-4 lg:-left-10 bg-[#e94541] text-white py-3 px-6 sm:py-4 sm:px-8 rounded-xl shadow-lg z-10">
                <span className="font-bold text-sm sm:text-lg whitespace-nowrap">2 Decades Of Experience</span>
              </div>
            </div>
          </div>

          <hr className="my-16 sm:my-24 border-zinc-100" />

          {/* Our Core Philosophy */}
          <div className="flex flex-col md:flex-row md:items-start gap-12 lg:gap-20">
            <div className="md:w-[40%] lg:w-[35%]" data-aos="fade-up" data-aos-duration="800">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1E1A4B] leading-tight">
                Our Core<br className="hidden lg:block"/> Philosophy
              </h2>
              <p className="mt-5 text-neutral-600 text-sm sm:text-base leading-relaxed max-w-sm">
                We do not offer one-size-fits-all solutions. Every engagement is built around:
              </p>
            </div>
            
            <div 
              className="md:w-[60%] lg:w-[65%] grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12"
              data-aos="fade-up" 
              data-aos-duration="800"
              data-aos-delay="100"
            >
              {[
                { num: 1, text: "Your workflow" },
                { num: 2, text: "Your strategic objectives" },
                { num: 3, text: "Your operational challenges" },
                { num: 4, text: "Your growth ambition" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-zinc-200 bg-white shadow-sm flex items-center justify-center text-neutral-400 font-bold text-sm sm:text-base group-hover:border-[#3b1578] group-hover:text-[#3b1578] group-hover:shadow-md transition-all duration-300 shrink-0">
                    {item.num}
                  </div>
                  <span className="text-neutral-700 font-medium text-base sm:text-lg">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="w-full bg-[#fbf9fe] py-16 sm:py-24 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Mission Image */}
            <div 
              className="relative w-full max-w-[550px] mx-auto aspect-square lg:aspect-auto lg:h-[500px] mb-8 lg:mb-0"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <Image 
                src={MISSION_IMG} 
                fill 
                className="object-contain" 
                alt="Way Gibb Mission and Vision" 
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            {/* Text Content */}
            <div className="flex flex-col space-y-14 lg:pl-10">
              
              {/* Mission */}
              <div data-aos="fade-up" data-aos-duration="800">
                <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1E1A4B] mb-4">
                  Our Mission
                </h3>
                <p className="text-neutral-700 text-base sm:text-lg leading-relaxed mb-6">
                  To provide dependable access to essential goods through a structured and efficient supply system.
                </p>
                <div className="bg-[#fcebef] border-l-4 border-[#e94541] p-5 sm:p-6 shadow-sm">
                  <p className="font-semibold text-[#1E1A4B] text-sm sm:text-base leading-snug">
                    To become a leading global food supply business serving multiple industries.
                  </p>
                </div>
              </div>
              
              {/* Vision */}
              <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1E1A4B] mb-4">
                  Our Vision
                </h3>
                <p className="text-neutral-700 text-base sm:text-lg leading-relaxed mb-6">
                  To become a leading direct-to-customer supply brand across multiple industries.
                </p>
                <div className="bg-[#fcebef] border-l-4 border-[#e94541] p-5 sm:p-6 shadow-sm">
                  <p className="font-semibold text-[#1E1A4B] text-sm sm:text-base leading-snug">
                    To become a leading global food supply business serving multiple industries.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

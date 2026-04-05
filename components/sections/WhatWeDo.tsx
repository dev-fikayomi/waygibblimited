import Image from "next/image";

type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  iconUrl: string;
  logoImage?: boolean;
  className?: string;
  aosDelay?: number;
};

function ServiceCard({
  title,
  description,
  image,
  imageAlt,
  iconUrl,
  logoImage,
  className = "",
  aosDelay = 0,
}: ServiceCardProps) {
  return (
    <article
      className={`flex flex-col overflow-hidden rounded-xl bg-white shadow-lg lg:shadow-xl ${className}`}
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      data-aos-duration="700"
    >
      <div
        className={`relative w-full ${logoImage ? "aspect-[5/4] bg-neutral-50" : "aspect-[5/3]"}`}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          className={
            logoImage ? "object-contain p-6 sm:p-8 md:p-10" : "object-cover"
          }
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5 md:p-6">
        <div className="flex gap-2.5 sm:gap-3">
          <div className="mt-0.5 relative h-5 w-5 sm:h-6 sm:w-6 shrink-0">
            <Image 
              src={iconUrl} 
              alt={`${title} icon`} 
              fill 
              className="object-contain" 
            />
          </div>
          <div className="min-w-0">
            <h3 className="text-base font-bold tracking-tight text-neutral-900 sm:text-lg">
              {title}
            </h3>
            <p className="mt-1.5 text-xs leading-relaxed text-neutral-600 sm:mt-2 sm:text-sm">
              {description}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

const services: Omit<ServiceCardProps, "className" | "aosDelay">[] = [
  {
    title: "Fresh Meat",
    description:
      "Quality poultry and meat sourced with consistent standards and prepared for dependable retail and home delivery.",
    image: "/images/fresh-chicken.png",
    iconUrl: "/images/fresh-meat-icon.svg",
    imageAlt: "Fresh poultry and meat",
  },
  {
    title: "Meat Sharing (Controlled Bulk System)",
    description:
      "Structured bulk meat programs with clear controls so groups and partners receive fair, traceable portions.",
    image: "/images/sharing-meat.png",
    iconUrl: "/images/sharing-meat-icon.svg",
    imageAlt: "Meat processing and sharing",
  },
  {
    title: "Building Materials Supply",
    description:
      "Essential construction materials delivered on schedule to support projects from small builds to larger developments.",
    image: "/images/materials-supply.png",
    iconUrl: "/images/building_materials-icon.svg",
    imageAlt: "Building materials and supplies",
  },
  {
    title: "Electronics",
    description:
      "Curated devices and accessories supplied through the same reliable ordering and fulfilment network as our other lines.",
    image: "/images/electronics-.png",
    iconUrl: "/images/electronics-icon.svg",
    imageAlt: "Electronics and accessories",
  },
  {
    title: "Way Gibb",
    description:
      "Our brand brings sourcing, processing, and logistics under one roof so customers get one dependable partner.",
    image: "/images/waygibb.png",
    iconUrl: "/images/connect-icon.svg",
    imageAlt: "Way Gibb brand",
    logoImage: true,
  },
];

export default function WhatWeDo() {
  return (
    <section
      id="do"
      className="bg-[#3b1578] py-10 sm:py-14 lg:py-20"
      aria-labelledby="what-we-do-heading"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          <div
            className="flex flex-col justify-start sm:col-span-2 lg:col-span-1 lg:col-start-1 lg:row-start-1 lg:max-w-md lg:pr-4"
            data-aos="fade-right"
            data-aos-duration="750"
          >
            <h2
              id="what-we-do-heading"
              className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl xl:text-[2.65rem] xl:leading-tight"
            >
              What we Do
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90 sm:mt-5 sm:text-base lg:text-lg">
              Waygibb connects customers to essential goods through direct sourcing
              and controlled logistics. From fresh proteins and building supplies
              to electronics and branded programmes, we focus on clarity,
              consistency, and delivery you can plan around.
            </p>
          </div>

          <ServiceCard
            {...services[0]!}
            className="lg:col-start-2 lg:row-start-1"
            aosDelay={80}
          />
          <ServiceCard
            {...services[1]!}
            className="lg:col-start-3 lg:row-start-1"
            aosDelay={160}
          />
          <ServiceCard
            {...services[2]!}
            className="lg:col-start-1 lg:row-start-2"
            aosDelay={240}
          />
          <ServiceCard
            {...services[3]!}
            className="lg:col-start-2 lg:row-start-2"
            aosDelay={320}
          />
          <ServiceCard
            {...services[4]!}
            className="lg:col-start-3 lg:row-start-2"
            aosDelay={400}
          />
        </div>
      </div>
    </section>
  );
}

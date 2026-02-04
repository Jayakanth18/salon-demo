import Image from "next/image";
import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import { getImagePath } from "@/lib/utils";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <div className="bg-gray-100 mb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="py-16 lg:py-24">
              <h1 className="font-dancing-script text-[#6DEAED] text-4xl mb-4">
                Welcome
              </h1>
              <h1 className="text-5xl lg:text-6xl font-bold mb-8">
                Beauty Salon Fashion for Women
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4">
                  <div className="bg-[#6DEAED] w-16 h-16 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-[#6DEAED] font-semibold mb-0">
                      Call Us
                    </h5>
                    <p className="text-xl mb-0">+123456789</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#6DEAED] w-16 h-16 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-[#6DEAED] font-semibold mb-0">
                      Mail Us
                    </h5>
                    <p className="text-xl mb-0">info@domain.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <HeroCarousel />
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Image
                src={getImagePath("/about.jpg")}
                alt="About"
                width={600}
                height={800}
                className="w-full mb-6"
              />
              <div className="flex items-center bg-gray-100 p-4">
                <div className="bg-[#6DEAED] w-24 h-24 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-12 h-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                  </svg>
                </div>
                <div className="px-4">
                  <h3 className="text-2xl font-bold">+0123456789</h3>
                  <span className="text-gray-600">
                    Call us direct 24/7 for get a free consultation
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h1 className="font-dancing-script text-[#6DEAED] text-4xl">
                About Us
              </h1>
              <h1 className="text-4xl font-bold mb-6">Why People Choose Us!</h1>
              <p className="mb-6 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas eget libero lobortis, auctor nisi quis, aliquet nunc.
                Nam dapibus interdum lacus, suscipit tempor odio viverra
                aliquam. Etiam non ex ex.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-100 text-center p-8">
                  <svg
                    className="w-16 h-16 mx-auto text-[#6DEAED] mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
                  </svg>
                  <h1 className="text-5xl font-bold mb-2">25</h1>
                  <p className="text-gray-700 uppercase font-semibold">
                    Years experience
                  </p>
                </div>
                <div className="bg-gray-100 text-center p-8">
                  <svg
                    className="w-16 h-16 mx-auto text-[#6DEAED] mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                  <h1 className="text-5xl font-bold mb-2">999</h1>
                  <p className="text-gray-700 uppercase font-semibold">
                    Happy Customers
                  </p>
                </div>
              </div>
              <Link
                href="/about"
                className="bg-[#6DEAED] text-white px-8 py-4 inline-block hover:bg-[#5BD4D7] transition-colors uppercase font-semibold"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-dancing-script text-[#6DEAED] text-4xl">
              Our Services
            </h1>
            <h1 className="text-4xl font-bold">Explore Our Services</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Haircut", img: "haircut.png" },
              { name: "Makeup", img: "makeup.png" },
              { name: "Manicure", img: "manicure.png" },
              { name: "Pedicure", img: "pedicure.png" },
              { name: "Massage", img: "massage.png" },
              { name: "Skin Care", img: "skin-care.png" },
            ].map((service, index) => (
              <div
                key={index}
                className="text-center p-8 border-b border-r border-gray-200 hover:shadow-lg transition-shadow"
              >
                <Image
                  src={getImagePath(`/${service.img}`)}
                  alt={service.name}
                  width={100}
                  height={100}
                  className="mx-auto mb-4"
                />
                <h3 className="text-2xl font-bold mb-4">{service.name}</h3>
                <p className="mb-4 text-gray-600">
                  Clita erat ipsum et lorem et sit, sed stet no labore lorem sit
                  clita duo justo et tempor eirmod magna dolore erat amet
                </p>
                <Link
                  href="/service"
                  className="text-sm bg-[#6DEAED] text-white px-4 py-2 inline-flex items-center gap-2 hover:bg-[#5BD4D7] transition-colors uppercase font-semibold"
                >
                  Read More
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-dancing-script text-[#6DEAED] text-4xl">
              Team Members
            </h1>
            <h1 className="text-4xl font-bold">Our Experienced Specialists</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Lily Taylor",
                role: "Hair Specialist",
                img: "team-1.jpg",
              },
              {
                name: "Olivia Smith",
                role: "Nail Designer",
                img: "team-2.jpg",
              },
              {
                name: "Ava Brown",
                role: "Beauty Specialist",
                img: "team-3.jpg",
              },
              {
                name: "Amelia Jones",
                role: "Spa Specialist",
                img: "team-4.jpg",
              },
            ].map((member, index) => (
              <div key={index} className="relative group overflow-hidden">
                <Image
                  src={getImagePath(`/${member.img}`)}
                  alt={member.name}
                  width={400}
                  height={500}
                  className="w-full"
                />
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center">
                  <p className="text-[#6DEAED] mb-2">{member.role}</p>
                  <h4 className="text-white text-xl font-bold mb-4">
                    {member.name}
                  </h4>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="w-10 h-10 flex items-center justify-center bg-gray-800 text-white border-2 border-gray-700 hover:bg-[#6DEAED] hover:border-[#6DEAED] transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 flex items-center justify-center bg-gray-800 text-white border-2 border-gray-700 hover:bg-[#6DEAED] hover:border-[#6DEAED] transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 flex items-center justify-center bg-gray-800 text-white border-2 border-gray-700 hover:bg-[#6DEAED] hover:border-[#6DEAED] transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-dancing-script text-[#6DEAED] text-4xl">
              Testimonial
            </h1>
            <h1 className="text-4xl font-bold">What Clients Say!</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-center bg-white p-8">
                <svg
                  className="w-12 h-12 mx-auto text-[#6DEAED] mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
                <p className="mb-4 text-gray-600">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                  diam amet diam et eos. Clita erat ipsum et lorem et sit.
                </p>
                <Image
                  src={`/testimonial-${i}.jpg`}
                  alt="Client"
                  width={100}
                  height={100}
                  className="mx-auto border-4 border-gray-200 p-1 mb-4 rounded-full"
                />
                <h4 className="text-xl font-bold mb-1">Client Name</h4>
                <span className="text-gray-600">Profession</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

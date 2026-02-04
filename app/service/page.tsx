import Image from "next/image";
import Link from "next/link";
import { getImagePath } from "@/lib/utils";

export default function Service() {
  const services = [
    {
      name: "Haircut",
      img: "haircut.png",
      desc: "Professional haircuts tailored to your style and personality. Our expert stylists will help you achieve the perfect look.",
    },
    {
      name: "Makeup",
      img: "makeup.png",
      desc: "Stunning makeup services for any occasion. From natural looks to glamorous evening makeup, we have you covered.",
    },
    {
      name: "Manicure",
      img: "manicure.png",
      desc: "Pamper your hands with our luxurious manicure treatments. Beautiful, healthy nails that make a statement.",
    },
    {
      name: "Pedicure",
      img: "pedicure.png",
      desc: "Relax and rejuvenate with our premium pedicure services. Your feet deserve the best care and attention.",
    },
    {
      name: "Massage",
      img: "massage.png",
      desc: "Therapeutic massage services to relax your body and mind. Experience ultimate relaxation and stress relief.",
    },
    {
      name: "Skin Care",
      img: "skin-care.png",
      desc: "Advanced skincare treatments for healthy, glowing skin. Customized solutions for all skin types.",
    },
  ];

  return (
    <main>
      {/* Page Header */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <nav className="flex justify-center gap-2 text-lg">
            <Link href="/" className="text-[#6DEAED] hover:underline">
              Home
            </Link>
            <span>/</span>
            <span>Services</span>
          </nav>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-dancing-script text-[#6DEAED] text-4xl">
              Our Services
            </h1>
            <h1 className="text-4xl font-bold">Explore Our Services</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {services.map((service, index) => (
              <div
                key={index}
                className="text-center p-8 border border-gray-200 hover:shadow-2xl transition-shadow"
              >
                <Image
                  src={getImagePath(`/${service.img}`)}
                  alt={service.name}
                  width={100}
                  height={100}
                  className="mx-auto mb-4"
                />
                <h3 className="text-2xl font-bold mb-4">{service.name}</h3>
                <p className="mb-6 text-gray-600">{service.desc}</p>
                <Link
                  href="/contact"
                  className="text-sm bg-[#6DEAED] text-white px-6 py-3 inline-flex items-center gap-2 hover:bg-[#5BD4D7] transition-colors uppercase font-semibold"
                >
                  Book Now
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

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-dancing-script text-[#6DEAED] text-4xl">
              Why Choose Us
            </h1>
            <h1 className="text-4xl font-bold">We Provide Best Services</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-[#6DEAED] flex items-center justify-center rounded-full">
                <svg
                  className="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Quality Service</h3>
              <p className="text-gray-600">
                We provide the highest quality service with attention to detail
                and customer satisfaction.
              </p>
            </div>
            <div className="bg-white p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-[#6DEAED] flex items-center justify-center rounded-full">
                <svg
                  className="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Our team consists of highly trained and experienced
                professionals in beauty services.
              </p>
            </div>
            <div className="bg-white p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-[#6DEAED] flex items-center justify-center rounded-full">
                <svg
                  className="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Premium Products</h3>
              <p className="text-gray-600">
                We use only the best and safest products to ensure excellent
                results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

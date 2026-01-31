import Image from "next/image";
import Link from "next/link";

export default function Testimonial() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      profession: "Business Owner",
      img: "testimonial-1.jpg",
      text: "The service at Salone is exceptional! The staff is professional, friendly, and always makes me feel pampered. I wouldn't trust my hair to anyone else.",
    },
    {
      name: "Emily Davis",
      profession: "Fashion Designer",
      img: "testimonial-2.jpg",
      text: "I've been coming to Salone for years and they never disappoint. From haircuts to makeup, everything is done with precision and care. Highly recommended!",
    },
    {
      name: "Jessica Brown",
      profession: "Model",
      img: "testimonial-3.jpg",
      text: "As a model, my appearance is everything. Salone has helped me maintain my look with their top-notch services. The team is skilled and dedicated.",
    },
    {
      name: "Amanda Wilson",
      profession: "Marketing Manager",
      img: "testimonial-4.jpg",
      text: "The atmosphere at Salone is relaxing and luxurious. Every visit feels like a spa day. The quality of service and products used is outstanding.",
    },
  ];

  return (
    <main>
      {/* Page Header */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Testimonial</h1>
          <nav className="flex justify-center gap-2 text-lg">
            <Link href="/" className="text-[#d4a574] hover:underline">
              Home
            </Link>
            <span>/</span>
            <span>Testimonial</span>
          </nav>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-dancing-script text-[#d4a574] text-4xl">Testimonial</h1>
            <h1 className="text-4xl font-bold">What Clients Say!</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center bg-gray-50 p-8 hover:shadow-lg transition-shadow">
                <svg className="w-12 h-12 mx-auto text-[#d4a574] mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
                <p className="mb-6 text-gray-600 italic">
                  "{testimonial.text}"
                </p>
                <Image
                  src={`/${testimonial.img}`}
                  alt={testimonial.name}
                  width={100}
                  height={100}
                  className="mx-auto border-4 border-gray-200 p-1 mb-4 rounded-full"
                />
                <h4 className="text-xl font-bold mb-1">{testimonial.name}</h4>
                <span className="text-gray-600">{testimonial.profession}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#d4a574] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Experience Our Services?</h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Join our satisfied clients and discover why we are the best choice for your beauty needs.
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-[#d4a574] px-8 py-4 inline-block hover:bg-gray-100 transition-colors uppercase font-semibold"
          >
            Book An Appointment
          </Link>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#d4a574] mb-2">25+</div>
              <p className="text-gray-600 uppercase font-semibold">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#d4a574] mb-2">999+</div>
              <p className="text-gray-600 uppercase font-semibold">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#d4a574] mb-2">50+</div>
              <p className="text-gray-600 uppercase font-semibold">Expert Stylists</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#d4a574] mb-2">100%</div>
              <p className="text-gray-600 uppercase font-semibold">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

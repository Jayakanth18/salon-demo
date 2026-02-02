import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main>
      {/* Page Header */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <nav className="flex justify-center gap-2 text-lg">
            <Link href="/" className="text-[#d4a574] hover:underline">
              Home
            </Link>
            <span>/</span>
            <span>About</span>
          </nav>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Image
                src="/about.jpg"
                alt="About"
                width={600}
                height={800}
                className="w-full mb-6"
              />
              <div className="flex items-center bg-gray-100 p-4">
                <div className="bg-[#d4a574] w-24 h-24 flex items-center justify-center flex-shrink-0">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                  </svg>
                </div>
                <div className="px-4">
                  <h3 className="text-2xl font-bold">+0123456789</h3>
                  <span className="text-gray-600">Call us direct 24/7 for get a free consultation</span>
                </div>
              </div>
            </div>
            <div>
              <h1 className="font-dancing-script text-[#d4a574] text-4xl">About Us</h1>
              <h1 className="text-4xl font-bold mb-6">Why People Choose Us!</h1>
              <p className="mb-6 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget libero
                lobortis, auctor nisi quis, aliquet nunc. Nam dapibus interdum lacus, suscipit tempor odio
                viverra aliquam. Etiam non ex ex.
              </p>
              <p className="mb-6 text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
                sunt explicabo.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-100 text-center p-8">
                  <svg className="w-16 h-16 mx-auto text-[#d4a574] mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                  </svg>
                  <h1 className="text-5xl font-bold mb-2">25</h1>
                  <p className="text-gray-700 uppercase font-semibold">Years experience</p>
                </div>
                <div className="bg-gray-100 text-center p-8">
                  <svg className="w-16 h-16 mx-auto text-[#d4a574] mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                  <h1 className="text-5xl font-bold mb-2">999</h1>
                  <p className="text-gray-700 uppercase font-semibold">Happy Customers</p>
                </div>
              </div>
              <Link href="/service" className="bg-[#d4a574] text-white px-8 py-4 inline-block hover:bg-[#c39563] transition-colors uppercase font-semibold">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "💇", title: "Expert Professionals", desc: "Diam dolor diam ipsum sit amet diam et eos" },
              { icon: "✨", title: "Quality Products", desc: "Diam dolor diam ipsum sit amet diam et eos" },
              { icon: "🏆", title: "Award Winning", desc: "Diam dolor diam ipsum sit amet diam et eos" },
              { icon: "😊", title: "Client Satisfaction", desc: "Diam dolor diam ipsum sit amet diam et eos" },
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

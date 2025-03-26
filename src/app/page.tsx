import Image from "next/image";
import { SITE_CONFIG } from "@/config/constants";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[45vh] flex items-center justify-center bg-gradient-to-b from-white to-orange-50">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="container mx-auto px-4 py-2 relative z-10">
          <div className="text-center">
            <Image
              src="/images/Zevation_transparent_background.png"
              alt="Zevation Logo"
              width={200}
              height={200}
              className="mx-auto mb-3"
              priority
            />
            <h1 className="text-3xl md:text-4xl font-bold mb-1 gradient-text">
              Empowering Bharat with AI
            </h1>
            <p className="text-lg md:text-xl font-medium text-gray-800 mb-1 max-w-2xl mx-auto">
              {SITE_CONFIG.description}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-4 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-3 text-gray-900">Our Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="text-zevation-orange mb-1">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-0.5 text-gray-900">Skilling</h3>
              <p className="text-lg font-medium text-gray-800">Empowering individuals with cutting-edge skills and knowledge for the digital age.</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="text-zevation-orange mb-1">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-0.5 text-gray-900">AI Tools Enablement</h3>
              <p className="text-lg font-medium text-gray-800">Leveraging artificial intelligence to enhance productivity and innovation.</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="text-zevation-orange mb-1">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-0.5 text-gray-900">Fulfilling Career</h3>
              <p className="text-lg font-medium text-gray-800">Creating pathways to meaningful and rewarding career opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-4 bg-gradient-to-br from-zevation-orange to-zevation-orange-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-1 text-white">Get in Touch</h2>
          <p className="text-xl font-medium mb-1 text-white">Keen to partner with us? Contact us today</p>
          <p className="text-xl font-medium text-white">Email us at <a href={`mailto:${SITE_CONFIG.email}`} className="underline hover:text-gray-100">{SITE_CONFIG.email}</a></p>
        </div>
      </section>
    </main>
  );
}

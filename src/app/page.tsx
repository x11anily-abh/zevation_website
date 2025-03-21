import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white to-orange-50">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <Image
                src="/images/Zevation_ transparent_ background.png"
                alt="Zevation Logo"
                width={200}
                height={200}
                className="w-48 h-48 object-contain"
                priority
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Zevation</span>
              <br />
              Empowering the Developing World with AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Building innovative AI products, platforms, and solutions focused on India and beyond
            </p>
            <div className="flex gap-4 justify-center">
              <a href="#contact" className="btn-primary">
                Get in Touch
              </a>
              <a href="#about" className="btn-secondary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our <span className="gradient-text">Mission</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-r from-zevation-orange to-zevation-orange-light rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">Creating cutting-edge AI solutions that address real-world challenges in developing nations.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-r from-zevation-orange to-zevation-orange-light rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Global Impact</h3>
              <p className="text-gray-600 leading-relaxed">Focusing on scalable solutions that can transform communities and drive economic growth.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-r from-zevation-orange to-zevation-orange-light rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Collaboration</h3>
              <p className="text-gray-600 leading-relaxed">Working with partners and communities to create sustainable AI solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xl text-gray-600 mb-8">
              Ready to transform your business with AI? Let's discuss how we can help.
            </p>
            <div className="flex flex-col items-center gap-6">
              <a href="mailto:contact@zevation.ai" className="btn-primary text-lg">
                contact@zevation.ai
              </a>
              <div className="flex gap-4 mt-4">
                <Link href="https://www.linkedin.com/in/anil-kumar-yadav-0584a71/" target="_blank" className="text-gray-600 hover:text-zevation-orange transition-colors">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-.88-.018-2.013-1.225-2.013-1.225 0-1.412 1.057-1.412 2.047v5.57h-3v-11h3v1.53h.045c.435-.825 1.5-1.698 3.088-1.698 3.3 0 3.862 2.17 3.862 4.995v6.173z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-orange-50">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center">
            <Image
              src="/zevation_website/images/Zevation_ transparent_ background.png"
              alt="Zevation Logo"
              width={200}
              height={200}
              className="mx-auto mb-8"
              priority
            />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Empowering India with AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Building AI products, platforms, and solutions to empower the developing world with a focus on India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-primary">
                Get Started
              </a>
              <a href="#features" className="btn-secondary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Our Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border border-gray-200 hover:border-zevation-orange transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 gradient-text">Custom AI Development</h3>
              <p className="text-gray-600">
                Tailored AI solutions designed specifically for your business needs.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-gray-200 hover:border-zevation-orange transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 gradient-text">Machine Learning</h3>
              <p className="text-gray-600">
                Advanced ML models to automate and optimize your operations.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-gray-200 hover:border-zevation-orange transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 gradient-text">Data Analytics</h3>
              <p className="text-gray-600">
                Transform your data into actionable insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Get in Touch
          </h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xl text-gray-600 mb-8">
              Ready to transform your business with AI? Contact us today.
            </p>
            <a
              href="mailto:contact@zevation.ai"
              className="btn-primary inline-block"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

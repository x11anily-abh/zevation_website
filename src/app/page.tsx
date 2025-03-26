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
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">1️⃣ Awareness</h3>
              <p className="text-base text-gray-800 font-medium">
                Enabling Bharat with Knowledge & Access
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Delivering targeted, multilingual information through preferred channels to raise awareness about global career opportunities and their requirements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">2️⃣ Empowerment Tools</h3>
              <p className="text-base text-gray-800 font-medium">
                Removing Barriers, Unlocking Potential
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Equipping Bharat with AI-driven tools to overcome challenges in skills, language, culture, societal norms, and financial limitations, ensuring an equal playing field.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">3️⃣ Rewarding Careers</h3>
              <p className="text-base text-gray-800 font-medium">
                Building Pathways to Growth & Fulfillment
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Providing direct access to global opportunities and enabling career growth through skill development and mentorship.
              </p>
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

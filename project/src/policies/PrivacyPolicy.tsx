import Footer from '../components/Footer'; 

export function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Privacy Policy
        </h1>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. Information We Collect
            </h2>
            <p>
              We collect information you provide directly to us, such as when you create an account, 
              make a purchase, or contact our customer support.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. How We Use Your Information
            </h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, 
              process transactions, and communicate with you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. Information Sharing
            </h2>
            <p>
              We do not sell your personal information. We may share information with service providers 
              who perform services on our behalf.
            </p>
          </section>

          <div className="bg-gray-100 p-4 rounded-lg mt-8">
            <p className="text-sm text-gray-600">
              Last Updated: December 2024
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Footer */}
  <Footer />
  </div>
  );
}

export default PrivacyPolicy;
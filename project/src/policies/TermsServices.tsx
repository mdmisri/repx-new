import Footer from '../components/Footer'; 

export function TermsServices() {
  return (
    <div className="flex flex-col min-h-screen">
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Terms of Service
        </h1>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using our website, you accept and agree to be bound by the terms 
              and provisions of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. Use of Service
            </h2>
            <p>
              You agree to use the service for lawful purposes and in a way that does not infringe 
              the rights of, restrict or inhibit anyone else's use and enjoyment of the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. Account Responsibilities
            </h2>
            <p>
              You are responsible for maintaining the confidentiality of your account and password, 
              and for restricting access to your account.
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

export default TermsServices;
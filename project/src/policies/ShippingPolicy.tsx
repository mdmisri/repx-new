import Footer from '../components/Footer'; 

export function ShippingPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Shipping Policy
        </h1>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. Shipping Methods
            </h2>
            <p>
              We offer standard and express shipping options. Shipping costs are calculated 
              at checkout based on weight, dimensions, and destination.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. Delivery Times
            </h2>
            <p>
              Standard shipping typically takes 5-7 business days. Express shipping 
              is available for faster delivery, usually 2-3 business days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. International Shipping
            </h2>
            <p>
              We currently ship to select countries. International shipping times 
              and costs vary depending on the destination.
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

export default ShippingPolicy;
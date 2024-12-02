import Footer from '../components/Footer';

export function RefundPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Cancellation & Return Policy
        </h1>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Returns Eligibility and Information
            </h2>
            <p>
              At freddiecity.com, we are committed to ensuring your satisfaction with our products. 
              We understand that there may be instances where you need to return or exchange an item. 
              Please review our return and refund policy below for a hassle-free experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Returns Period
            </h2>
            <p>
              Customers have the right to initiate returns within 7 days from the date of product delivery.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Eligibility
            </h2>
            <p>
              We accept returns for products that are unused and undamaged, in their original packaging.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Return Process
            </h2>
            <p>
              To start the return process, please contact our customer support team within the stipulated 
              return period. Provide your order number, product details, and the reason for the return.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Refund and Exchange Details
            </h2>
            <p>
              Upon receiving and inspecting the returned product, we will promptly process your refund 
              or exchange. Refunds will be credited to the original payment method used during the purchase. 
              You can also choose an exchange for an alternative product of equal value or store credit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Order Cancellation Terms
            </h2>
            <p>
              Customers can cancel orders within 2 hours of placing the order. Once an order is shipped 
              or being prepared for shipment, cancellation may not be possible. Contact our customer 
              support team to initiate a cancellation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Customer Support
            </h2>
            <p>
              For any return, refund, or cancellation queries, please contact us:
            </p>
            <div className="mt-4">
              <p>Email: sales@freddiecity.com</p>
              <p>Phone: +91 9392326818</p>
            </div>
          </section>

          <div className="bg-gray-100 p-4 rounded-lg mt-8">
            <p className="text-sm text-gray-600">
              Last Updated: November 1, 2023
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

export default RefundPolicy;
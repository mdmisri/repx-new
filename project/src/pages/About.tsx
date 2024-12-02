import Footer from '../components/Footer';

export function About() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="pt-16 px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6 md:p-10">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">About Us</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Welcome to REPX, your go-to destination for high-quality gym apparel. We are dedicated to providing you with comfortable, durable, and stylish workout clothing that helps you look and feel your best during your workouts. 
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At REPX, we understand the importance of both performance and style, which is why we carefully design each product with the perfect balance of comfort, durability, and modern aesthetics. Whether you're lifting weights, running, or just relaxing, our apparel is designed to move with you and keep you comfortable.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We believe in quality, and every piece of clothing we produce is crafted with the finest materials and attention to detail. Our mission is to provide high-performance gym gear that helps you push your limits and achieve your fitness goals.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our commitment to customer satisfaction is our top priority. We offer hassle-free returns, exchanges, and friendly customer support to ensure that every experience with us is seamless and enjoyable.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Thank you for choosing REPX. We hope our apparel helps you unlock your full potential and achieve your fitness aspirations!
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default About;

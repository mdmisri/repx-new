import React, { useState } from 'react';

export function LoginPage() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Submitted email:', email);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h1 className="text-3xl font-bold text-center mb-4">Login</h1>
          
          <div className="text-center text-gray-400 text-sm mb-4">
            <p>Enter your email and we'll send you a login code</p>
          </div>
          
          <div>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300"
          >
            Continue
          </button>
        </form>
        
        <div className="text-center text-gray-500 text-xs mt-8">
          <a href="/policies/PrivacyPolicy" className="hover:underline">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

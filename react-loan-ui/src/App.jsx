import React, { useState } from 'react';

export default function App() {
  const [loanAmount, setLoanAmount] = useState('');
  const [termMonths, setTermMonths] = useState('');
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchOffers = async (e) => {
    e.preventDefault();
    setLoading(true);
    setOffers([]);

    try {
      const response = await fetch(`http://localhost:3000/api/loan_offers?loan_amount=${loanAmount}&term_months=${termMonths}`);
      const data = await response.json();
      setOffers(data);
    } catch (error) {
      console.error('Failed to fetch offers:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl w-full space-y-6">
        <h1 className="text-3xl font-bold text-blue-700">Loan Offer Comparison</h1>
  
        <form onSubmit={fetchOffers} className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700">Loan Amount ($)</label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
  
          <div>
            <label className="block font-medium text-gray-700">Loan Term (months)</label>
            <input
              type="number"
              value={termMonths}
              onChange={(e) => setTermMonths(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
  
          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            {loading ? 'Loading...' : 'Compare Offers'}
          </button>
        </form>
  
        {offers.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            {offers.map((offer, index) => (
              <div key={index} className="bg-blue-50 border border-blue-200 rounded-xl p-4 shadow">
                <h2 className="text-xl font-semibold text-blue-800">{offer.bank_name}</h2>
                <p><strong>APR:</strong> {offer.apr}%</p>
                <p><strong>Term:</strong> {offer.term_months} months</p>
                <p><strong>Monthly Payment:</strong> ${offer.monthly_payment}</p>
                <p><strong>Total Cost:</strong> ${offer.total_cost}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

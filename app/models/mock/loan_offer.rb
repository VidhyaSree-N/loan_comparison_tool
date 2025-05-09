module Mock
    class LoanOffer
      attr_reader :bank_name, :apr, :term_months, :monthly_payment, :total_cost
  
      def initialize(bank_name:, apr:, term_months:, monthly_payment:, total_cost:)
        @bank_name = bank_name
        @apr = apr
        @term_months = term_months
        @monthly_payment = monthly_payment
        @total_cost = total_cost
      end
  
      def self.generate_offers(params)
        amount = params[:loan_amount].to_f
        term = params[:term_months].to_i
  
        [
          new_offer("Bank A", 4.5, amount, term),
          new_offer("Bank B", 5.0, amount, term),
          new_offer("Bank C", 3.8, amount, term)
        ]
      end
  
      def self.new_offer(name, apr, amount, term)
        monthly_rate = apr / 12 / 100
        payment = (amount * monthly_rate) / (1 - (1 + monthly_rate)**(-term))
        total = payment * term
  
        new(
          bank_name: name,
          apr: apr,
          term_months: term,
          monthly_payment: payment.round(2),
          total_cost: total.round(2)
        )
      end
    end
  end
  
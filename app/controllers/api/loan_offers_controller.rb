class Api::LoanOffersController < ApplicationController
    def index
      offers = Mock::LoanOffer.generate_offers(params)
      render json: offers.map { |offer|
        {
          bank_name: offer.bank_name,
          apr: offer.apr,
          term_months: offer.term_months,
          monthly_payment: offer.monthly_payment,
          total_cost: offer.total_cost
        }
      }
    end
  end
  
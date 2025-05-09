import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="loan"
export default class extends Controller {
  static targets = ["amount", "term", "offers", "form"]

  async submit(event) {
    event.preventDefault()

    const amount = this.amountTarget.value
    const term = this.termTarget.value

    this.offersTarget.innerHTML = "Loading..."

    try {
      const response = await fetch(`/api/loan_offers?loan_amount=${amount}&term_months=${term}`)
      const offers = await response.json()

      this.offersTarget.innerHTML = offers.map(offer => `
        <div class="bg-blue-50 border border-blue-200 rounded-xl p-4 shadow">
          <h2 class="text-xl font-semibold text-blue-800">${offer.bank_name}</h2>
          <p><strong>APR:</strong> ${offer.apr}%</p>
          <p><strong>Term:</strong> ${offer.term_months} months</p>
          <p><strong>Monthly Payment:</strong> $${offer.monthly_payment}</p>
          <p><strong>Total Cost:</strong> $${offer.total_cost}</p>
        </div>
      `).join('')
    } catch (error) {
      console.error(error)
      this.offersTarget.innerHTML = "Error fetching offers."
    }
  }
}

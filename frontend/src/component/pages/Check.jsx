import React, { useState } from 'react';
import './Check.css';

const Checkout = () => {
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expityMonth, setExpityMonth] = useState('');
  const [expityYear, setExpityYear] = useState('');
  const [cvCode, setCvCode] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    // Display a message
    window.alert("Payment Successful!");

    // Print information
    const info = `
      Card Holder Name: ${cardHolderName}
      Card Number: ${cardNumber}
      Expiry Date: ${expityMonth}/${expityYear}
      CV Code: ${cvCode}
    `;
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`<pre>${info}</pre>`);
    printWindow.print();
  };

  return (
    <div className="container checkout-form">
      <div className="row">
        <div className="col-xs-12 col-md-6 col-md-offset-3">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Payment Details</h3>
            </div>
            <div className="panel-body">
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="cardHolderName">Card Holder Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="cardHolderName" 
                    placeholder="Card Holder Name" 
                    value={cardHolderName}
                    onChange={(e) => setCardHolderName(e.target.value)}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="cardNumber" 
                    placeholder="Valid Card Number" 
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    required 
                  />
                </div>
                <div className="row">
                  <div className="col-xs-7">
                    <div className="form-group">
                      <label htmlFor="expityMonth">Expiry Date</label>
                      <div className="row">
                        <div className="col-xs-6">
                          <input 
                            type="text" 
                            className="form-control" 
                            id="expityMonth" 
                            placeholder="MM" 
                            value={expityMonth}
                            onChange={(e) => setExpityMonth(e.target.value)}
                            required 
                          />
                        </div>
                        <div className="col-xs-6">
                          <input 
                            type="text" 
                            className="form-control" 
                            id="expityYear" 
                            placeholder="YY" 
                            value={expityYear}
                            onChange={(e) => setExpityYear(e.target.value)}
                            required 
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-5">
                    <div className="form-group">
                      <label htmlFor="cvCode">CV Code</label>
                      <input 
                        type="password" 
                        className="form-control" 
                        id="cvCode" 
                        placeholder="CV" 
                        value={cvCode}
                        onChange={(e) => setCvCode(e.target.value)}
                        required 
                      />
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary btn-lg btn-block">Pay</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

import React from 'react';
import { FcDonate } from 'react-icons/fc';

function loadRazorpay(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    document.body.appendChild(script);
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
  });
}
// const __DEV__ = Document.domain === 'localhost';

function RazorpayPayment() {
  async function displayRazorpay() {
    const res = await loadRazorpay(
      'https://checkout.razorpay.com/v1/checkout.js'
    );
    if (!res) {
      alert('Opps! Razorpay Failed To Load ! Are You online ?');
    }
    const options = {
      key: 'rzp_test_T2BFiLClVcsjvT',
      amount: '50000',
      currency: 'INR',
      name: 'Upaayam Donation',
      description: 'Thank You for your support.',
      image:
        'https://res.cloudinary.com/dyzfhna0z/image/upload/v1615743259/All_new_Echo_Dot_4th_Gen_with_clock_Next_generation_smart_speaker_with_improved_bass_LED_display_and_Alexa_White_608a307cde.jpg',
      // order_id: 'order_9A33XWu170gUtm',
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: 'Gaurav Kumar',
        email: 'gaurav.kumar@example.com',
        contact: '9999999999',
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#3399cc',
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.on('payment.failed', function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    paymentObject.open();
  }

  return (
    <div>
      <a
        onClick={displayRazorpay}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        <FcDonate />
      </a>
    </div>
  );
}

export default RazorpayPayment;

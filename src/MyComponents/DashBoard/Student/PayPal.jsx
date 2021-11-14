import React, { useEffect, useRef } from 'react';

const PayPal = ({ course }) => {
  const paypal = useRef();

  useEffect(() => {
    if (course) {
      window.paypal
        .Buttons({
          createOrder: (data, actions, err) => {
            return actions.order.create({
              intent: 'CAPTURE',
              purchase_units: [
                {
                  description: course?.Course?.name,
                  amount: {
                    currency_code: 'USD',
                    value: course?.Course?.price,
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            console.log(order);
          },
          onError: (err) => {
            console.log(err);
          },
        })
        .render(paypal.current);
    }
  }, [course]);

  return <>{course ? <div ref={paypal}></div> : null}</>;
};

export default PayPal;

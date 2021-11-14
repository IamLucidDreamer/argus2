// import { IconButton } from '@mui/material';
// import React, { useEffect, useState, useRef } from 'react';
// import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
// import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

// const PayPal = ({ course, show, setShow, price }) => {
//   const paypal = useRef();

//   useEffect(() => {
//     if (price) {
//       window.paypal
//         .Buttons({
//           createOrder: (data, actions, err) => {
//             return actions.order.create({
//               intent: 'CAPTURE',
//               purchase_units: [
//                 {
//                   description: course?.Course?.name,
//                   amount: {
//                     currency_code: 'USD',
//                     value: price,
//                   },
//                 },
//               ],
//             });
//           },
//           onApprove: async (data, actions) => {
//             const order = await actions.order.capture();
//             console.log(order);
//           },
//           onError: (err) => {
//             console.log(err);
//           },
//         })
//         .render(paypal.current);
//     }
//   }, [price]);

//   return (
//     <div
//       className={`${
//         show ? 'block' : 'hidden'
//       } fixed top-1/2 right-1/2 transform translate-x-1/2 z-50 -translate-y-1/2 flex justify-center items-center w-full h-full bg-black bg-opacity-20`}
//     >
//       <div className="bg-white rounded-lg w-1/4 max-h-3/4 flex relative">
//         <div className="w-full flex justify-end p-4 absolute">
//           <IconButton
//             onClick={() => {
//               setShow(false);
//             }}
//           >
//             <CloseRoundedIcon fontSize="large" />
//           </IconButton>
//         </div>
//         <div className="w-full justify-center items-center p-10 mt-10">
//           {/* <div ref={paypal}></div> */}
//           <PayPalScriptProvider options={{ 'client-id': 'test' }}>
//             <PayPalButtons
//               style={{ layout: 'horizontal' }}
//               fundingSource={undefined}
//               createOrder={(data, actions) => {
//                 return actions.order.create({
//                   intent: 'CAPTURE',
//                   purchase_units: [
//                     {
//                       description: course?.Course?.name,
//                       amount: {
//                         currency_code: 'USD',
//                         value: price,
//                       },
//                     },
//                   ],
//                 });
//               }}
//             />
//           </PayPalScriptProvider>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PayPal;

// // <<div ref={paypal}></div>

import React from 'react';
import {
  SquarePaymentsForm,
  CreditCardInput,
} from 'react-square-web-payments-sdk';

const applicationId = 'sandbox-sq0idb-NcSzunbg1PqLFw0axzIC3Q';
const locationId = 'LV0BFXTE346N4';

const PaymentPage = () => {
  const cardTokenizeResponseReceived = (tokenRecieved) => {
    console.log(tokenRecieved);
  };
  return (
    <SquarePaymentsForm
      applicationId={applicationId}
      locationId={locationId}
      cardTokenizeResponseReceived={cardTokenizeResponseReceived}
    >
      <CreditCardInput></CreditCardInput>
    </SquarePaymentsForm>
  );
};

export default PaymentPage;

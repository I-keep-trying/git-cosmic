import axios from 'axios';

const cosmicService = {
  placeOrder(
    userName,
    address,
    cardNumber,
    cvv,
    cardExpiryDate,
    mobile,
    amount
  ) {
    return axios.post(
      `${process.env.GATSBY_URL}` + process.env.GATSBY_SLUG + '/add-object/',
      {
        title: userName,
        slug: userName + cardNumber,
        type_slug: 'orders',
        write_key: process.env.GATSBY_WRITE_KEY,
        metafields: [
          {
            key: 'userName',
            type: 'text',
            value: userName
          },
          {
            key: 'address',
            type: 'text',
            value: address
          },
          {
            key: 'cardNumber',
            type: 'text',
            value: cardNumber
          },
          {
            key: 'cvv',
            type: 'text',
            value: cvv
          },
          {
            key: 'cardExpiryDate',
            type: 'text',
            value: cardExpiryDate
          },
          {
            key: 'mobile',
            type: 'text',
            value: mobile
          },
          {
            key: 'totalamount',
            type: 'text',
            value: amount
          }
        ]
      }
    );
  }
};

export default cosmicService;

const orders = {
  1: {
    amount: 1000,
    currency: "TWD",
    package: [
      {
        id: "products_1",
        amount: 1000,
        products: [
          {
            name: "sheng",
            quantity: 1,
            price: 1000,
          },
        ],
      },
    ],
  },
  2: {
    amount: 1000,
    currency: "TWD",
    package: [
      {
        id: "products_2",
        amount: 3000,
        products: [
          {
            name: "danny",
            quantity: 1,
            price: 6000,
          },
        ],
      },
    ],
  },
};

module.exports = orders;

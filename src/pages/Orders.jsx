function Orders() {
  const orders = [
    {
      id: "#1001",
      amount: "$120",
    },
    {
      id: "#1002",
      amount: "$95",
    },
    {
      id: "#1003",
      amount: "$250",
    },
  ];

  return (
    <>
      <h2>Orders</h2>

      <div className="orders-grid">
        {orders.map(
          (order) => (
            <div
              key={order.id}
              className="order-card"
            >
              <h3>
                {order.id}
              </h3>

              <p>
                Amount:
                {" "}
                {
                  order.amount
                }
              </p>
            </div>
          )
        )}
      </div>
    </>
  );
}

export default Orders;
import { useEffect, useState } from "react";

type Order = {
  type: "espresso" | "americano" | "latte" | "cappuccino" | "mocha";
  price: number;
  quantity: number;
};
function App() {
  const [orders, setOrders] = useState<Order[]>([]);

  // This is a Pattern (actually an anti-pattern) you need to avoid in your code
  // To recognise this pattern this  is a unnecesary useEffect that calls a useState inside of him

  // const [total, setTotal] = useState(0);

  // useEffect(() => {
  //   const total = orders.reduce(
  //     (acc, order) => acc + order.price * order.quantity,
  //     0
  //   );
  //   setTotal(total);
  // }, [orders]);

  // replace this into this

  const total = orders.reduce(
    (acc, order) => acc + order.price * order.quantity,
    0
  );
  // set orders directly
  return (
    <div>
      <h1>Orders</h1>
      {orders.map((order: Order) => (
        <div>
          <p>{order.type}</p>
          <p>
            {" "}
            <span>{order.price} </span> {order.quantity}{" "}
          </p>
        </div>
      ))}
      <p>
        <span>${total} </span>
      </p>
    </div>
  );
}

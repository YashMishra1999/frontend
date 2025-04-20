// 📁 Directory: frontend-ui
// Run: npm install && npm start

import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/api/users")
      .then(res => res.json())
      .then(setUsers)
      .catch(console.error);

    fetch("http://localhost:8082/api/orders")
      .then(res => res.json())
      .then(setOrders)
      .catch(console.error);

    fetch("http://localhost:8083/api/products")
      .then(res => res.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  return (
    <div className="portfolio">
      <header className="hero-section">
        <h1>Hi! I'm <span className="highlight">Yash Mishra</span></h1>
        <p>DevOps Engineer | Microservices Enthusiast | Cloud Architect</p>
      </header>

      <section className="info-section">
        <div className="section-card">
          <h2>👤 Users</h2>
          <ul>
            {users.map((user) => (
              <li key={user.id}><strong>{user.id}</strong>: {user.name}</li>
            ))}
          </ul>
        </div>

        <div className="section-card">
          <h2>📦 Orders</h2>
          <ul>
            {orders.map((order) => (
              <li key={order.orderId}><strong>{order.orderId}</strong>: {order.product}</li>
            ))}
          </ul>
        </div>

        <div className="section-card">
          <h2>🛒 Products</h2>
          <ul>
            {products.map((product) => (
              <li key={product.id}><strong>{product.id}</strong>: {product.name}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default App;


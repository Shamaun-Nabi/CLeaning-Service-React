import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

export default function Services() {
  const [product, setService] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setService(data));
    // axios.get("http://localhost:5000/").then((res) => setService(res.data));
  }, []);
  console.log(product);

  return (
    <div>
      {product?.map((p, index) => (
        <li key={index}>{p.serviceName}</li>
      ))}
    </div>
  );
}

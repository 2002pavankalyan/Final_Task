import { useEffect, useState } from "react";

function useFetchProducts(url) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) =>
        console.log("Error:", error)
      );
  }, [url]);

  return products;
}

export default useFetchProducts;
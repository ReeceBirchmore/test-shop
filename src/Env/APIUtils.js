// APIS here

// Fetch all available products
export const fetchProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  return await res.json();
};

// Fetch a singular product based on a given ID
export const fetchProduct = async (id) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return await res.json();
};

// Fetch all categories
export const fetchCategories = async () => {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  return await res.json();
};

// Return a specific category
export const fetchAllCategories = async (category) => {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );
  return await res.json();
};

// Search and sort products based on ASC or DESC
export const fetchAndSortProducts = async (sort) => {
  const res = await fetch(`https://fakestoreapi.com/products?sort=${sort}`);
  return await res.json();
};

//Add a product
/**
 * Format for product:
 *
 * title: string
 * price: number
 * description: string
 * image: string
 * category: string
 *
 */
export const addProduct = async (product) => {
  const res = await fetch("https://fakestoreapi.com/products", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(product),
  });
  return await res.json();
};

// Update a product
/**
 * Format for product:
 *
 * title: string
 * price: number
 * description: string
 * image: string
 * category: string
 *
 */
export const updateProduct = async (id, product) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(product),
  });
  return await res.json();
};

// Delete a product

export const deleteProduct = async (id) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "DELETE",
  });
  return await res.json();
};

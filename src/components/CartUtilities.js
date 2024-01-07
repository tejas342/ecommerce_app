export const calculateTotalPrice = (cartItems) => {
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantityAdded;
  }, 0);

  // Round the totalPrice to two decimal places
  return totalPrice.toFixed(2);
};

export const addToCart = (cartItems, setCartItems, product, quantityChange) => {
  const existingItem = cartItems.find((item) => item.id === product.id);

  if (existingItem) {
    const updatedItems = cartItems.map((item) =>
      item.id === product.id ? { ...item, quantityAdded: item.quantityAdded + quantityChange } : item
    );
    setCartItems(updatedItems);
  } else {
    setCartItems([...cartItems, { ...product, quantityAdded: 1 }]);
  }
};

export const incrementQuantity = (cartItems, setCartItems, product) => {
  addToCart(cartItems, setCartItems, product, 1);
};

export const decrementQuantity = (cartItems, setCartItems, product) => {
  const existingItem = cartItems.find((item) => item.id === product.id);

  if (existingItem.quantityAdded === 1) {
    const updatedItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedItems);
  }

  if (existingItem && existingItem.quantityAdded > 1) {
    const updatedItems = cartItems.map((item) =>
      item.id === product.id ? { ...item, quantityAdded: item.quantityAdded - 1 } : item
    );
    setCartItems(updatedItems);
  }
};

export const removeItem = (cartItems, setCartItems, product) => {
  const updatedItems = cartItems.filter((item) => item.id !== product.id);
  setCartItems(updatedItems);
};

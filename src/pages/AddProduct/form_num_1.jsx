import React, { useState } from "react";
import "./form_num_1.css";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    quantity: "",
    price: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const submitForm = (event) => {
    event.preventDefault();
    alert(
      `Name: ${formData.name}, Description: ${formData.description}, Category: ${formData.category}, Quantity: ${formData.price}, Price: ${formData.price}`
    );
    console.log(
      `Name: ${formData.name}, Description: ${formData.description}, Category: ${formData.category}, Quantity: ${formData.price}, Price: ${formData.price}`
    );
  };

  const handleCancel = () => {
    // Clearing the form by resetting the state
    setFormData({
      name: "",
      description: "",
      category: "",
      quantity: "",
      price: "",
    });
  };

  return (
    <form onSubmit={submitForm} className="form">
      <span className="form__text">
        <b>Adding Products</b>
      </span>
      <label className="form__text" htmlFor="name">
        Name:
      </label>
      <input
        type="text"
        id="name"
        className="form__input"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label className="form__text" htmlFor="description">
        Description:
      </label>
      <textarea
        id="description"
        className="form__textarea"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />

      <label className="form__text" htmlFor="category">
        Category:
      </label>
      <input
        type="text"
        id="category"
        className="form__input"
        name="category"
        value={formData.category}
        onChange={handleChange}
      />

      <label className="form__text" htmlFor="quantity">
        Quantity:
      </label>
      <input
        type="number"
        id="quantity"
        className="form__input"
        name="quantity"
        value={formData.quantity}
        onChange={handleChange}
      />
      <label className="form__text" htmlFor="price">
        Price:
      </label>
      <input
        type="number"
        id="price"
        className="form__input"
        name="price"
        value={formData.price}
        onChange={handleChange}
      />

      <button className="form__button" type="submit">
        Submit
      </button>
      <button className="form__button" type="button" onClick={handleCancel}>
        Cancel
      </button>
    </form>
  );
}

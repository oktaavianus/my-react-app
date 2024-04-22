import { Fragment } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: "Rp 1.000.000",
    image: "/public/fashion-shoes-sneakers.jpg",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos ut
          maxime laudantium natus vel incidunt iure quo perferendis ipsum
          aliquam fuga tempora debitis et, laborum, sequi sint dolores. Itaque,
          hic!`,
  },
  {
    id: 2,
    name: "Sepatu Lama",
    price: "Rp 500.000",
    image: "/public/fashion-shoes-sneakers.jpg",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.`,
  },
  {
    id: 3,
    name: "Sepatu Niki",
    price: "Rp 2.000.000",
    image: "/public/fashion-shoes-sneakers.jpg",
    description: `lorem ipsum`,
  },
];

const email = localStorage.getItem("email");

const ProductPage = () => {

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  }

  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
      </div>
      <div className="flex justify-center py-5">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header images={product.image} />
            <CardProduct.Body name={product.name}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
    </Fragment>
  );
};

export default ProductPage;

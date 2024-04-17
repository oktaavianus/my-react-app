import Button from "../Elements/Button";

const CardProduct = (props) => {
  const {children} = props
  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-200 rounded-lg shadow mx-2">
      {children}
    </div>
  );
};

const Header = (props) => {
  const {images} = props
  return (
    <a href="">
      <img
        src={images}
        alt="Product Image"
        className="p-8 rounded-t-lg"
      />
    </a>
  );
};

const Body = (props) => {
  const {children, title} = props
  return (
    <div className="px-5 pb-5">
      <a href="">
        <h5 className="text-xl font-semibold tracking-light text-white">
          {title}
        </h5>
        <p className="text-s text-white">
          {children}
        </p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const {price} = props
  return (
    <div className="flex item-justify justify-between px-5 pb-5">
      <span className="text-2xl font-bold text-white">{price}</span>
      <Button classname="bg-blue-600">Add To Cart</Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;

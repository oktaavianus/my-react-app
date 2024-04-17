import CardProduct from "../components/Fragments/CardProduct";

export default function ProductPage() {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header images="/public/fashion-shoes-sneakers.jpg" />
        <CardProduct.Body title="New Shoes">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos ut
          maxime laudantium natus vel incidunt iure quo perferendis ipsum
          aliquam fuga tempora debitis et, laborum, sequi sint dolores. Itaque,
          hic!
        </CardProduct.Body>
        <CardProduct.Footer price="Rp.1.000.000" />
      </CardProduct>
    </div>
  );
}

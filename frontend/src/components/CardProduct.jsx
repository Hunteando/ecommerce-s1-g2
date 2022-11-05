import Counter from "./Counter";

function CardProduct({ data }) {
  const stock = data.stock;
  return (
    <div className="w-40">
      <div className="w-full rounded-lg shadow-md lg:max-w-sm">
        <img className="object-cover w-40 h-28 rounded-t" src={data.image} alt="image" />
        <div className="pt-2 text-center">
          <h4 className="text-sm font-medium uppercase text-blue-600">{data.name}</h4>
          <p className="mb-2 font-bold">${data.price}</p>
          <Counter stock={stock} />
        </div>
      </div>
    </div>
  );
}
export default CardProduct;

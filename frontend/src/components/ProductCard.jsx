import image1 from "../assests/images/image1.jpg";

function ProductCard() {
  return (
    <div className="grid grid-cols-2 gap-4 mb-8">
      <div className="rounded overflow-hidden shadow-lg">
        <img src={image1} alt="Mountain" />
        <div className="py-2 bg-gray-300 w-full">
          <p className="text-center text-sm">VEGANAS</p>
        </div>
      </div>
      <div className="rounded overflow-hidden shadow-lg">
        <img src={image1} alt="Mountain" />
        <div className="py-2 bg-gray-300 w-full">
          <p className="text-center text-sm">CLÁSICAS</p>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;

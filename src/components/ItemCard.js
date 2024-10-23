const ItemCard = () => {
  return (
    <div className="flex flex-col bg-white rounded-lg overflow-hidden border border-gray-300 w-3/12">
      <div className="h-[200px]">
        <img
          className="w-full h-full object-contain"
          src="https://apollo.olx.in/v1/files/dtx79v4lxrax1-IN/image;s=505x483"
          alt="Item-image"
        />
      </div>
      <div className="flex flex-col p-4 space-y-2">
        <h5 className="text-lg font-semibold text-gray-800">₹ Price</h5>
        <p className="text-sm text-gray-600">Short description of the item</p>
        <div className="flex justify-between text-sm text-gray-500">
          <p>Place</p>
          <p>Date</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;

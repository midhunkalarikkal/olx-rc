import ItemCard from "./ItemCard";

const FreshRecommendations = () => {
  return (
    <div className="mt-4">
      <h1 className="text-2xl">Fresh recommendations</h1>
      <div className="flex flex-wrap gap-4 p-4">
        <ItemCard />
      </div>
    </div>
  );
};

export default FreshRecommendations;

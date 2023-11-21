const CircleCategory = ({ imgUrl, category, link }) => {
  return (
    <div className="cursor-pointer hover:scale-110 duration-500 w-fit h-fit">
      <img src={imgUrl} className="object-cover h-40" />
    </div>
  );
};

export default CircleCategory;

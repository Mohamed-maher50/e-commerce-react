import CircleCategory from "./CircleCategory";

const data = [
  {
    category: "mobiles",
    imgUrl: "/categories/entry_mobile_en_web.jpg",
    link: "",
  },
  {
    category: "TWs",
    imgUrl: "/categories/entry_mobile_en_web.jpg",
    link: "",
  },
  {
    category: "Charges",
    imgUrl: "/categories/entry_mobile_en_web.jpg",
    link: "",
  },
  {
    category: "Watches",
    imgUrl: "/categories/entry_mobile_en_web.jpg",
    link: "",
  },
  {
    category: "Gaming",
    imgUrl: "/categories/entry_mobile_en_web.jpg",
    link: "",
  },
  {
    category: "Gaming",
    imgUrl: "/categories/entry_mobile_en_web.jpg",
    link: "",
  },
  {
    category: "Storage",
    imgUrl: "/categories/entry_mobile_en_web.jpg",
    link: "",
  },
  {
    category: "TVs",
    imgUrl: "/categories/entry_mobile_en_web.jpg",
    link: "",
  },
];

const Index = () => {
  return (
    <div className="py-3 grid gap-4 grid-cols-8">
      {data.map((category) => {
        return <CircleCategory {...category} />;
      })}
    </div>
  );
};

export default Index;

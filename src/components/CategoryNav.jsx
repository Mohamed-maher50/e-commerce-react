const category = [
  {
    category: {
      title: "computer",
      subCategories: [
        {
          subCategoryTitle: "mouses",
          links: ["hp", "lava"],
        },
      ],
    },
  },
];

const CategoryNav = () => {
  return (
    <>
      <div className="p-3 bg-neutral relative">
        {category.map((ct, indexCt) => {
          return (
            <div className="text-stone-50 group/item" key={indexCt}>
              <label>{ct.category.title}</label>
              <div className="absolute p-3 bg-gray-50 left-0 right-0 z-10 hidden   group-hover/item:block">
                {ct.category.subCategories.map((subCategory, index) => {
                  return (
                    <div key={index}>
                      <label className="text-black">
                        {subCategory.subCategoryTitle}
                      </label>
                      <ul>
                        {subCategory.links.map((link, linkKey) => {
                          return <li key={linkKey}>{link}</li>;
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CategoryNav;

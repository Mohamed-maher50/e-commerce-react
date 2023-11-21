const category = [
  {
    category: {
      title: "computer",
      subCategories: [
        {
          subCategoryTitle: "LAPTOPS",
          links: [
            "HP",
            "LENOVO",
            "ASUS",
            "DELL",
            "ACER",
            "MSI",
            "HUAWEI",
            "lava",
          ],
        },
        {
          subCategoryTitle: "mouses",
          links: ["hp", "lava"],
        },
        {
          subCategoryTitle: "mouses",
          links: ["hp", "lava"],
        },
        {
          subCategoryTitle: "mouses",
          links: ["hp", "lava"],
        },
        {
          subCategoryTitle: "mouses",
          links: ["hp", "lava"],
        },
      ],
    },
  },
  {
    category: {
      title: "labtops",
      subCategories: [
        {
          subCategoryTitle: "brand",
          links: ["hp", "dell"],
        },
      ],
    },
  },
  {
    category: {
      title: "headphones",
      subCategories: [
        {
          subCategoryTitle: "head hone whireless",
          links: ["hp", "lava"],
        },
      ],
    },
  },
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
      <div className=" hidden  bg-black text-sm relative md:flex justify-evenly">
        {category.map((ct, indexCt) => {
          return (
            <div className="text-stone-50 group/item" key={indexCt}>
              <h1 className="relative uppercase text-sm hover:text-primary p-2 h-full cursor-pointer">
                {ct.category.title}
              </h1>
              <div className="absolute shadow-lg grid-cols-4 top-10 p-3 bg-white left-0 right-0 z-20 hidden  duration-700  group-hover/item:grid">
                {ct.category.subCategories.map((subCategory, index) => {
                  return (
                    <div key={index} className=" ">
                      <label className=" uppercase text-lg text-gray-600">
                        {subCategory.subCategoryTitle}
                      </label>
                      <ul className="text-gray-800">
                        {subCategory.links.map((link, linkKey) => {
                          return (
                            <li className=" text-sm" key={linkKey}>
                              {link}
                            </li>
                          );
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

import React from "react";
import { useState } from "react";

const ItemList = ({ options, onChange, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLabel, setActiveLabel] = useState(-1);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleOnChangeItem = ({ name, _id }) => {
    if (name == activeLabel) {
      setActiveLabel(name);
    } else {
      onChange(_id);
      setActiveLabel(name);
    }
  };
  return (
    <div
      className="collapse collapse-arrow join-item cursor-pointer"
      onClick={handleClick}
    >
      <input
        type="radio"
        name={`my-accordion-${Math.round(Math.random() * 1000)}`}
        checked={isOpen}
        onChange={() => {}}
      />

      <div className="collapse-title text-xl font-medium">{title}</div>
      <div
        onClick={(e) => e.stopPropagation()}
        className="collapse-content text-sm    capitalize items-center"
      >
        {options?.map(({ name, _id }, index) => {
          let randomID = `label-${Math.round(Math.random() * 500 + index)}`;
          return (
            <div className="flex items-center gap-3" key={index}>
              <input
                id={randomID}
                type={"checkbox"}
                className="form-checkbox h-3 w-3 inline-block "
                checked={activeLabel == name}
                onChange={() => handleOnChangeItem({ name, _id })}
              />

              <label htmlFor={randomID}>{name}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemList;

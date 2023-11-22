import React from "react";
import ItemList from "./ItemList";
import { useState } from "react";
const data = [
  {
    title: "brands",
    options: [
      {
        label: "apple",
        value: "xaml",
      },
      {
        label: "samsung",
        value: "apple",
      },
      {
        label: "oppo",
        value: "apple",
      },
      {
        label: "vivo",
        value: "apple",
      },
      {
        label: "noke",
        value: "apple",
      },
      {
        label: "apple",
        value: "apple",
      },
    ],
  },
  {
    title: "CLUSTER",
    options: [
      {
        label: "apple",
        value: "apple",
      },
    ],
  },
  {
    title: "CLUSTER",
    options: [
      {
        label: "apple",
        value: "apple",
      },
    ],
  },
  {
    title: "CLUSTER",
    options: [
      {
        label: "apple",
        value: "apple",
      },
      {
        label: "apple",
        value: "apple",
      },
      {
        label: "apple",
        value: "apple",
      },
      {
        label: "apple",
        value: "apple",
      },
      {
        label: "apple",
        value: "apple",
      },
    ],
  },
  {
    title: "CLUSTER",
    options: [
      {
        label: "apple",
        value: "apple",
      },
    ],
  },
  {
    title: "CLUSTER",
    options: [
      {
        label: "apple",
        value: "apple",
      },
    ],
  },
  {
    title: "CLUSTER",
    options: [
      {
        label: "apple",
        value: "apple",
      },
    ],
  },
  {
    title: "COLOR",
    options: [
      {
        label: "apple",
        value: "apple",
      },
    ],
  },
  {
    title: "brands",
    options: [
      {
        label: "apple",
        value: "apple",
      },
    ],
  },
];
const SidebarFilter = () => {
  return (
    <div className="grid gap-y-2">
      {data.map((option, n) => {
        return <ItemList key={n} {...option} />;
      })}
    </div>
  );
};

export default SidebarFilter;

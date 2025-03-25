import React from "react";
import s from "./ActiveLabel.module.css";

export type ActiveLabelProp = {
  children: React.ReactNode;
};

const ActiveLabel = ({ children }: ActiveLabelProp) => {
  return <span className={s.label}>{children}</span>;
};

export default ActiveLabel;

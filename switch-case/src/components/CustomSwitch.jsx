import React, { Children } from "react";

export const CustomCase = ({ children }) => <>{children}</>;
export const DefaultCase = ({ children }) => <>{children}</>;

const CustomSwitch = ({ children, value }) => {
  const cases = [];
  const defaults = [];
  Children.forEach(children, (e) => {
    // if (e.type.name === "CustomCase") {
    if (e.type === CustomCase) {
      const check = e.props.value;
      if (typeof check === "function") {
        if (check(value)) {
          cases.push(e);
        }
      } else if (value === check) {
        cases.push(e);
      }
    } else if (e.type === DefaultCase) {
      defaults.push(e);
    }
  });
  return <>{cases.length > 0 ? cases : defaults}</>;
};
export default CustomSwitch;

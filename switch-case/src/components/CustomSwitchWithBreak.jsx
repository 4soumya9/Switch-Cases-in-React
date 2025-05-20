import { Children } from "react";

export const CustomCase = ({ children }) => <>{children}</>;
export const DefaultCase = ({ children }) => <>{children}</>;

const CustomSwitchWithBreak = ({ children, value }) => {
  let matchedCase = null;
  let defaultCase = null;

  for (let child of Children.toArray(children)) {
    if (child.type === CustomCase) {
      const check = child.props.value;
      if (typeof check === "function") {
        if (check(value)) {
          matchedCase = child;
          break;
        }
      } else if (value === check) {
        matchedCase = child;
        break;
      }
    } else if (child.type === DefaultCase) {
      defaultCase = child;
    }
  }

  return <>{matchedCase ? matchedCase : defaultCase}</>;
};

export default CustomSwitchWithBreak;

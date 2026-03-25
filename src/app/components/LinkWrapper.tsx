import { Link as RouterLink } from "react-router";

export const Link = ({ to, children, className }) => {
  return (
    <RouterLink to={to} className={className}>
      {children}
    </RouterLink>
  );
};
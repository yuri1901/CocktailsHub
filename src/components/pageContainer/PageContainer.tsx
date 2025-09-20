// type from react
import type { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
}

const PageContainer = ({ children, className = "" }: IProps) => {
  return <section className={`container mx-auto px-2 ${className}`}>{children}</section>;
};

export default PageContainer;

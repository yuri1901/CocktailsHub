// type from react
import type { ReactNode } from "react";

interface SearchCardWrapperProps {
  children: ReactNode;
}

const SearchCardWrapper = ({ children }: SearchCardWrapperProps) => {
  return <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3">{children}</section>;
};

export default SearchCardWrapper;

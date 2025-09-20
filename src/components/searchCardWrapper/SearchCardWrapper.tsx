// type from react
import type { ReactNode } from "react";

interface SearchCardWrapperProps {
  children: ReactNode;
}

const SearchCardWrapper = ({ children }: SearchCardWrapperProps) => {
  return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">{children}</div>;
};

export default SearchCardWrapper;

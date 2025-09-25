// type from react
import type { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const PageContainer = ({ children }: IProps) => {
  return <section className={`mx-auto min-h-dvh min-h-screen flex flex-col gap-8 items-center pr-2 pl-2`}>{children}</section>;
};

export default PageContainer;

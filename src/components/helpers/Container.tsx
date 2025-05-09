import type { JSX, ReactNode } from "react";

interface IContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({
  children,
  className,
}: IContainerProps): JSX.Element => {
  return (
    <div
      className={`container max-w-[930px] w-full mx-auto px-[10px] ${className}`}
    >
      {children}
    </div>
  );
};

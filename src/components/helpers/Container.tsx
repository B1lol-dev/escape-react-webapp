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
    <div className={`container max-w-7xl w-full mx-auto px-4 ${className}`}>
      {children}
    </div>
  );
};

interface IPostsTitleProps {
  text: string;
  className?: string;
}

export const PostsTitle = ({ text, className }: IPostsTitleProps) => {
  return (
    <h1 className={`text-es-black text-center text-xl ${className}`}>
      {text}
      <div className="bg-es-gray-sc h-[1px] w-[188px] mx-auto mt-4"></div>
    </h1>
  );
};

interface IPostsTitleProps {
  text: string;
}

export const PostsTitle = ({ text }: IPostsTitleProps) => {
  return <h1>{text}</h1>;
};

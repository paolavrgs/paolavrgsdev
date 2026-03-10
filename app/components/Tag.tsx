interface TagProps {
  text: string;
  color: string;
  background: string;
}

const Tag = (props: TagProps) => {
  const { text, color = "white", background = "primary" } = props;

  return (
    <div className={`flex items-center gap-2 bg-${background} rounded-lg p-2`}>
      <p className={`text-sm font-roboto-mono font-bold text-${color}`}>{text}</p>
    </div>
  );
};

export default Tag;
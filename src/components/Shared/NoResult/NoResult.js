export function NoResult(props) {
  const { text } = props;
  return (
    <div className="text-center mt-12">
      <p className="text-red-500">{text}</p>
    </div>
  );
}

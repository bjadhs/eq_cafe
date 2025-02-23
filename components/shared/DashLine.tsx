const DashLine = ({ color }: { color: string }) => {
  return (
    <div
      className={`w-full border-2 border-spacing-4 ${color} border-dashed`}
    ></div>
  );
};

export default DashLine;

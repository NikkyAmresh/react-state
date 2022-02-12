const CakeSizeComponent = ({ size, changeSize }) => {
  const cakeSizes = [
    {
      id: 1,
      label: "6",
      maxDecoration: 8,
    },
    {
      id: 2,
      label: "8",
      maxDecoration: 10,
    },
    {
      id: 3,
      label: "9",
      maxDecoration: 12,
    },
    {
      id: 4,
      label: "10",
      maxDecoration: 15,
    },
    {
      id: 5,
      label: "18x32",
      maxDecoration: 32,
    },
  ];
  return (
    <div>
      Cake Size :{" "}
      {cakeSizes.map((cakeSize) => (
        <button
          key={cakeSize.id}
          className={`btn ${cakeSize.id === size.id && "selected"}`}
          onClick={() => changeSize(cakeSize)}
        >
          {cakeSize.label}
        </button>
      ))}
    </div>
  );
};

export default CakeSizeComponent;

const DecoratorComponent = ({ decorator, valueSetter }) => {
  const handelChange = (event) => {
    valueSetter(decorator.id, event.target.value);
  };
  return (
    <div className="row decorator ">
      <div className="col">
        <span>{decorator.label}</span>
      </div>
      <div className="col decValue">
        <select value={decorator.value} onChange={handelChange}>
          {[...Array(decorator.max + 1)].map((_, i) => {
            return (
              <option key={i} value={i}>
                {i}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};
export default DecoratorComponent;

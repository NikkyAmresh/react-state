import { useState } from "react";
import CakeSizeComponent from "./CakeSize";
import CakeDecorationComponent from "./CakeDecoration";

const CakeComponent = () => {
  const [selectedSize, setSelectedSize] = useState({
    id: null,
    label: null,
    maxDecoration: 0,
  });
  return (
    <div className="container">
      <h1>This is cake Component</h1>
      <CakeSizeComponent size={selectedSize} changeSize={setSelectedSize} />
      {!selectedSize.id && <h3>Please select a size</h3>}
      <CakeDecorationComponent cakeSize={selectedSize} />
    </div>
  );
};

export default CakeComponent;

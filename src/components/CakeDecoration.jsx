import { useState, useEffect } from "react";
import DecoratorComponent from "./Decoration";
const CakeDecorationComponent = ({ cakeSize }) => {
  let decoratorItems = [
    {
      id: 1,
      label: "Flower",
      value: 0,
      max: cakeSize.maxDecoration,
    },
    {
      id: 2,
      label: "Star",
      value: 0,
      max: cakeSize.maxDecoration,
    },
    {
      id: 3,
      label: "Diamond",
      value: 0,
      max: cakeSize.maxDecoration,
    },
    {
      id: 4,
      label: "Heart",
      value: 0,
      max: cakeSize.maxDecoration,
    },
  ];

  const [decorators, setDecorators] = useState([]);
  const [availableDecorators, setAvailableDecorators] = useState(0);

  const setDecoratorValue = (id, value) => {
    let decotation = decorators;
    const idx = decotation.findIndex((obj) => obj.id === id);
    if (idx !== -1) {
      decotation[idx].value = value;
    }
    const used = decotation.reduce((a, b) => {
      b.value = parseInt(b.value, 10);
      return a + b.value;
    }, 0);

    const available = cakeSize.maxDecoration - used;
    decotation.forEach((dec, i) => {
      if (dec.id !== id) decotation[i].max = decotation[i].value + available;
    });

    setAvailableDecorators(available);
    setDecorators(decotation);
  };

  useEffect(() => {
    setDecorators(
      decoratorItems.map((d) => {
        return { ...d, value: 0 };
      })
    );
    setAvailableDecorators(cakeSize.maxDecoration);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cakeSize]);

  return (
    <div className="decorations">
      <h5>Cake Decoration:</h5>
      <h1>{cakeSize.maxDecoration}</h1>
      <div className="row">
        {decorators.map((decorator) => {
          return (
            <DecoratorComponent
              key={decorator.id}
              decorator={decorator}
              valueSetter={setDecoratorValue}
            />
          );
        })}
      </div>
      <div className="availableDec">{availableDecorators} remaining</div>
    </div>
  );
};

export default CakeDecorationComponent;

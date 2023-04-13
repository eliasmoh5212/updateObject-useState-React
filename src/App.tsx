import React, { useState } from "react";

const App = () => {
  const [person, setPerson] = useState({
    name: "John",
    address: {
      city: "San Francisco",
      zipCode: 41111
    }
  });
  const handleClick = () => {
    // setDrink({ ...drink, price: 40 });
    setPerson({ ...person, address: { ...person.address, zipCode: 532323 } });
  };
  return (
    <div>
      {/* {drink.price} */}
      {person.address.zipCode}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};
export default App;

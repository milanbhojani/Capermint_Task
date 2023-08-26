import React from 'react';
import Accordion from './Accordion';

const App = () => {
  const accordionItems = [
    {
      title: 'Item 1',
      content: 'Content for Item 1',
    },
    {
      title: 'Item 2',
      content: 'Content for Item 2',
    },
    // Add more items as needed
  ];

  return (
    <div className="App">
      <h1>Accordion Menu</h1>
      <Accordion items={accordionItems} />
    </div>
  );
};

export default App;

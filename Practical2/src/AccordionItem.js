import React, { useState } from 'react';

const AccordionItem = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="accordion-item">
      <button className="accordion-button" onClick={toggleAccordion}>
        {title}
      </button>
      {expanded && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default AccordionItem;

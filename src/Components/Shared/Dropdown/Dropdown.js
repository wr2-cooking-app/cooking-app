import React, { useState } from "react";
import "./Dropdown.scss";

export default (props) => {
  const { isMulti, items, onSelect, placeholder } = props;

  const [isOpened, setIsOpened] = useState(false);
  const [label, setLabel] = useState("");

  // for multi
  const [selectedIndices, setSelectedIndices] = useState(() => items.map(() => false));

  const handleItemSelect = (i) => {
    // retrieve new value
    const item = items[i];
    const newValue = item ? item.value || item.label : "";
    // set label and opened state
    if (isMulti) {
      if (i > -1) {
        let updated = selectedIndices;
        updated[i] = !updated[i];
        setLabel(selectedIndices.filter((value) => value).length + " selected");
        setSelectedIndices([...updated]);
      } else {
        setLabel("");
        setSelectedIndices(items.map(() => false));
      }
      let output = [];
      items.forEach((item, i) => selectedIndices[i] && output.push(item.value || item.label));
      onSelect && onSelect(output);
    } else {
      setLabel(newValue);
      setIsOpened(false);
      onSelect && onSelect(newValue);
    }
  };

  return (
    <div className="dropdown">
      <div className="container">
        <input placeholder={placeholder} value={label} readOnly={true} onClick={() => setIsOpened(!isOpened)} />
        {label && <label onClick={() => handleItemSelect(-1)}>X</label>}
      </div>
      {isOpened && (
        <div className="items-container">
          {items.map((item, i) => {
            return (
              <div key={i} className="item" onClick={() => handleItemSelect(i)}>
                {isMulti && <input type="checkbox" checked={selectedIndices[i]} readOnly />}
                <label>{item.label || item.value}</label>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

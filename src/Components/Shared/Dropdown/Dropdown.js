import React, { useState, useEffect } from "react";
import "./Dropdown.scss";

export default (props) => {
  const { isMulti, items, onSelect, placeholder } = props;

  const [isOpened, setIsOpened] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [label, setLabel] = useState("");

  useEffect(() => {
    const item = items[selectedIndex];
    const newValue = item ? item.value || item.label : "";
    setLabel(newValue);
    onSelect && onSelect(selectedIndex, newValue);
    setIsOpened(false);
  }, [items, onSelect, selectedIndex]);

  return (
    <div className="dropdown">
      <div className="container">
        <input placeholder={placeholder} value={label} readOnly={true} onClick={() => setIsOpened(!isOpened)} />
      </div>
      {isOpened && (
        <div className="items-container">
          <label className="item" onClick={() => setSelectedIndex(-1)}>
            {placeholder}
          </label>
          {items.map((item, i) => (
            <label key={i} className="item" onClick={() => setSelectedIndex(i)}>
              {item.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

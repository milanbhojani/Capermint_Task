import React, { useState } from "react";

const FormField = ({ onAddField, onClose }) => {
  const [fieldName, setFieldName] = useState("");
  const [fieldType, setFieldType] = useState("text");
  const [isRequired, setIsRequired] = useState(false);
  const [fileType, setFileType] = useState("image");
  const [options, setOptions] = useState("");

  const handleAddField = () => {
    const newField = {
      name: fieldName,
      type: fieldType,
      required: isRequired,
      fileType: fieldType === "file" ? fileType : undefined,
      options: options.split(",").map((opt) => opt.trim()),
    };

    onAddField(newField);
    setFieldName("");
    setFieldType("text");
    setIsRequired(false);
    setFileType("image");
    setOptions("");
  };

  const handleOptionChange = (e) => {
    setOptions(e.target.value);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div>
          <label>
            Field Name:
            {isRequired && <span style={{ color: "red" }}>*</span>}
          </label>
          <input
            type="text"
            value={fieldName}
            onChange={(e) => setFieldName(e.target.value)}
          />
        </div>
        <div>
          <label>Field Type: </label>
          <select
            value={fieldType}
            onChange={(e) => setFieldType(e.target.value)}
          >
            <option value="text">Text</option>
            <option value="paragraph">Paragraph</option>
            <option value="radio">Radio</option>
            <option value="checkbox">Checkbox</option>
            <option value="file">File</option>
            <option value="date">Date</option>
          </select>
        </div>
        <div>
          <label>Is Required: </label>
          <select
            value={isRequired}
            onChange={(e) => setIsRequired(e.target.value === "true")}
          >
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </select>
        </div>
        {fieldType === "file" && (
          <div>
            <label>File Type: </label>
            <select
              value={fileType}
              onChange={(e) => setFileType(e.target.value)}
            >
              <option value="image">Image</option>
              <option value="audio">Audio</option>
              <option value="video">Video</option>
              <option value="other">Other</option>
            </select>
          </div>
        )}
        {["checkbox", "radio"].includes(fieldType) && (
          <div>
            <label>Options (comma-separated): </label>
            <input type="text" value={options} onChange={handleOptionChange} />
          </div>
        )}
        <button onClick={handleAddField}>Add</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default FormField;

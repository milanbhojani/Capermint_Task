import React, { useState } from "react";
import FormField from "./Formfield";
function App() {
  const [formFields, setFormFields] = useState([]);
  const [showFieldModal, setShowFieldModal] = useState(false);

  const handleAddField = (field) => {
    setFormFields([...formFields, field]);
    setShowFieldModal(false);
  };

  const handleRemoveField = (index) => {
    const updatedFields = formFields.filter((_, i) => i !== index);
    setFormFields(updatedFields);
  };

  const handleSubmit = () => {
    const hasEmptyRequiredFields = formFields.some(
      (field) => field.required && !field.value
    );

    if (hasEmptyRequiredFields) {
      alert("One or more required fields are empty");
    } else {
      alert("Form data submitted successfully");
    }
  };

  return (
    <div className="app">
      <h1>Dynamic Form Builder</h1>
      <button onClick={() => setShowFieldModal(true)}>Add Field</button>
      <div className="form-fields">
        {formFields.map((field, index) => (
          <div key={index} className="field">
            {field.type === "text" && (
              <input
                type="text"
                placeholder={field.name}
                required={field.required}
                onChange={(e) =>
                  setFormFields((prevFields) => {
                    const updatedFields = [...prevFields];
                    updatedFields[index].value = e.target.value;
                    return updatedFields;
                  })
                }
              />
            )}
            {field.type === "checkbox" && (
              <div>
                {field.options.map((option, optionIndex) => (
                  <label key={optionIndex}>
                    <input
                      type="checkbox"
                      name={field.name}
                      value={option}
                      onChange={(e) =>
                        setFormFields((prevFields) => {
                          const updatedFields = [...prevFields];
                          updatedFields[index].value = e.target.checked;
                          return updatedFields;
                        })
                      }
                    />
                    {option}
                  </label>
                ))}
              </div>
            )}
            {field.type === "file" && (
              <input
                type="file"
                accept={field.fileType === "image" ? "image/*" : "video/*"}
                onChange={(e) =>
                  setFormFields((prevFields) => {
                    const updatedFields = [...prevFields];
                    updatedFields[index].value = e.target.files[0];
                    return updatedFields;
                  })
                }
              />
            )}
            {field.type === "date" && (
              <input
                type="date"
                onChange={(e) =>
                  setFormFields((prevFields) => {
                    const updatedFields = [...prevFields];
                    updatedFields[index].value = e.target.value;
                    return updatedFields;
                  })
                }
              />
            )}
            {field.type === "paragraph" && (
              <textarea
                placeholder={field.name}
                required={field.required}
                onChange={(e) =>
                  setFormFields((prevFields) => {
                    const updatedFields = [...prevFields];
                    updatedFields[index].value = e.target.value;
                    return updatedFields;
                  })
                }
              />
            )}

            {field.type === "radio" && (
              <div>
                {field.options.map((option, optionIndex) => (
                  <label key={optionIndex}>
                    <input
                      type="radio"
                      name={field.name}
                      value={option}
                      onChange={(e) =>
                        setFormFields((prevFields) => {
                          const updatedFields = [...prevFields];
                          updatedFields[index].value = e.target.value;
                          return updatedFields;
                        })
                      }
                    />
                    {option}
                  </label>
                ))}
              </div>
            )}

            <button onClick={() => handleRemoveField(index)}>Remove</button>
          </div>
        ))}
      </div>
      {showFieldModal && (
        <FormField
          onAddField={handleAddField}
          onClose={() => setShowFieldModal(false)}
        />
      )}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;

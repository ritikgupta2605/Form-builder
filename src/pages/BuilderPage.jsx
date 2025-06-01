import { generateFormId, saveFormById, downloadAsJSON } from "../utils/localStorageUtils";
import FieldEditor from "../components/FieldEditor";
import FieldRenderer from "../components/FieldRenderer";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

export default function BuilderPage() {
  const [fields, setFields] = useState([]);

  const handleExport = () => {
    downloadAsJSON({ fields });
  };

  const handleShare = () => {
    const formId = generateFormId();
    saveFormById(formId, { fields });
    alert(`Shareable Link: ${window.location.origin}/form/${formId}`);
  };

  const updateField = (index, updated) => {
    const newFields = [...fields];
    newFields[index] = updated;
    setFields(newFields);
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const newFields = [...fields];
    const [removed] = newFields.splice(result.source.index, 1);
    newFields.splice(result.destination.index, 0, removed);
    setFields(newFields);
  };

 return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-8">
  <div className="w-full max-w-5xl bg-white rounded-xl shadow-md p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center">Form Builder</h1>

        <div className="flex flex-wrap gap-4 justify-center">
          <button onClick={handleExport} className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
            Export as JSON
          </button>
          <button onClick={handleShare} className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700">
            Generate Shareable Link
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Field Editor Section */}
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="fields">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-4">
                  {fields.map((f, i) => (
                    <Draggable key={i} draggableId={`field-${i}`} index={i}>
                      {(provided) => (
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <FieldEditor field={f} onChange={(updated) => updateField(i, updated)} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>

          {/* Live Preview */}
          <div className="p-4 border rounded-xl shadow bg-gray-50">
            <h2 className="text-xl font-semibold mb-4 text-center">Live Form Preview</h2>
            {fields.map((f, i) => (
              <FieldRenderer key={i} field={f} />
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => setFields([...fields, { type: "text", label: "", placeholder: "" }])}
            className="bg-gray-700 text-white px-4 py-2 rounded shadow hover:bg-gray-800"
          >
            + Add New Field
          </button>
        </div>
      </div>
    </div>
  );
}
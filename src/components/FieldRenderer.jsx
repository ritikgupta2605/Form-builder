export default function FieldRenderer({ field }) {
  const commonProps = {
    placeholder: field.placeholder,
    required: field.required,
    minLength: field.minLength || undefined,
    maxLength: field.maxLength || undefined,
    pattern: field.pattern || undefined,
    className:
      "border border-gray-300 px-4 py-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3",
  };

  const labelClass = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <div className="mb-4">
      {field.label && <label className={labelClass}>{field.label}</label>}

      {(() => {
        switch (field.type) {
          case "text":
            return <input type="text" {...commonProps} />;

          case "textarea":
            return <textarea rows="3" {...commonProps} />;

          case "dropdown":
            return (
              <select
                required={field.required}
                className="border border-gray-300 px-4 py-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
              >
                <option value="">-- Select --</option>
                {field.options?.map((opt, i) => (
                  <option key={i} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            );

          default:
            return null;
        }
      })()}
    </div>
  );
}

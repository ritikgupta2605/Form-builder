export default function FieldEditor({ field, onChange }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md space-y-4 p-6 border rounded-2xl shadow-md bg-white transition hover:shadow-lg">
        <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Field Label</label>
          <input
            className="border border-gray-300 px-4 py-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={field.label}
            onChange={(e) => onChange({ ...field, label: e.target.value })}
            placeholder="Enter label"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Placeholder</label>
          <input
            className="border border-gray-300 px-4 py-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={field.placeholder}
            onChange={(e) => onChange({ ...field, placeholder: e.target.value })}
            placeholder="Enter placeholder"
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={field.required}
            onChange={(e) => onChange({ ...field, required: e.target.checked })}
            className="accent-blue-600"
          />
          <label className="text-sm text-gray-700">Required</label>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Min Length</label>
            <input
              type="number"
              placeholder="e.g. 3"
              value={field.minLength || ""}
              onChange={(e) => onChange({ ...field, minLength: +e.target.value })}
              className="border px-4 py-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Max Length</label>
            <input
              type="number"
              placeholder="e.g. 10"
              value={field.maxLength || ""}
              onChange={(e) => onChange({ ...field, maxLength: +e.target.value })}
              className="border px-4 py-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Validation Pattern</label>
          <input
            placeholder="e.g. ^\\S+@\\S+\\.\\S+$"
            value={field.pattern || ""}
            onChange={(e) => onChange({ ...field, pattern: e.target.value })}
            className="border px-4 py-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      </div>
    </div>
  );
}

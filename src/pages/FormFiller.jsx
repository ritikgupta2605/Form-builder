import { useParams } from "react-router-dom";
import { loadFormById } from "../utils/localStorageUtils";
import FieldRenderer from "../components/FieldRenderer";

export default function FormFiller() {
  const { id } = useParams();
  const form = loadFormById(id);

  if (!form)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-600 text-lg font-semibold">Form not found.</div>
      </div>
    );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-md p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Public Form</h1>
        <form className="space-y-6">
          {form.fields.map((f, i) => (
            <div key={i}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {f.label}
              </label>
              <FieldRenderer field={f} />
            </div>
          ))}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

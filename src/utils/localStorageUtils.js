export const saveFormById = (id, form) => {
    localStorage.setItem(`form-${id}`, JSON.stringify(form));
  };
  
  export const loadFormById = (id) => {
    const data = localStorage.getItem(`form-${id}`);
    return data ? JSON.parse(data) : null;
  };
  
  export const generateFormId = () => {
    return Math.random().toString(36).substr(2, 9);
  };
  
  export const downloadAsJSON = (form) => {
    const blob = new Blob([JSON.stringify(form, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "form-data.json";
    a.click();
  };
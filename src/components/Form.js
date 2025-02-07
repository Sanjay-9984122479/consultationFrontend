import React from "react";
import DropzoneUploader from "./DropzoneUploader";
import Swal from "sweetalert2";
import axios from "axios";

const Form = ({ title, fields, inputFields, setInputFields, handleSubmit, error }) => {
  const handleChange = (key, value) => {
    setInputFields((prev) => ({ ...prev, [key]: value }));
  };

  const handleFileUpload = async (files) => {
    if (!files.length) return;
    
    const formData = new FormData();
    formData.append("file", files[0]); 

    try {
      const { data } = await axios.post("http://localhost:5001/images/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (data?.path) {
        setInputFields((prev) => ({ ...prev, profile: data.path }));

        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Upload successful",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message || "Upload failed",
      });
    }
  };

  return (
    <div className="w-full flex justify-center m-3">
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <h2 className="text-center font-bold p-5 underline">{title}</h2>

        <div className="flex flex-wrap -mx-3 mb-6">
          {fields?.map(({ key, label, type, placeholder, list }) => (
            <div key={key} className="w-full md:w-1/2 px-3 mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                {label}
              </label>

              {type === "text" || type === "number" || type === "password" || type === "date" ? (
                <input
                  type={type}
                  placeholder={placeholder}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  value={inputFields[key] || ""}
                  onChange={(e) => handleChange(key, e.target.value)}
                />
              ) : type === "textarea" ? (
                <textarea
                  placeholder={placeholder}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  value={inputFields[key] || ""}
                  onChange={(e) => handleChange(key, e.target.value)}
                />
              ) : type === "file" ? (
                <DropzoneUploader onFileUpload={handleFileUpload} />
              ) : type === "option" || type === "gender" ? (
                <select
                  className="block appearance-none w-full bg-gray-200 border text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white"
                  value={inputFields[key] || ""}
                  onChange={(e) => handleChange(key, e.target.value)}
                >
                  <option value="">Select {label}</option>
                  {list.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              ) : null}

              {error[key] && <p className="text-red-500 text-xs italic">{error[key]}</p>}
            </div>
          ))}
        </div>

        <button type="submit" className="h-10 w-full bg-blue-800 text-white mt-4 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

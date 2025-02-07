import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud, X } from "lucide-react";

const DropzoneUploader = ({ onFileUpload }) => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      const newFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      setFiles(newFiles);
      if (onFileUpload) onFileUpload(newFiles);
    },
    [onFileUpload]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: true,
  });

  const removeFile = (name) => {
    setFiles(files.filter((file) => file.name !== name));
  };

  return (
    <div className="w-full">
      {/* Dropzone */}
      <div
        {...getRootProps()}
        className="border-2 border-dashed border-gray-300 p-6 rounded-lg cursor-pointer text-center hover:border-blue-500 transition"
      >
        <input {...getInputProps()} />
        <UploadCloud className="mx-auto text-gray-400" size={50} />
        <p className="text-gray-500">Drag & Drop or Click to Upload</p>
      </div>

      {/* Image Previews */}
      {files.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-4">
          {files.map((file) => (
            <div key={file.name} className="relative w-24 h-24">
              <img
                src={file.preview}
                alt={file.name}
                className="w-full h-full object-cover rounded-lg"
              />
              <button
                className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full text-xs"
                onClick={() => removeFile(file.name)}
              >
                <X size={14} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropzoneUploader;

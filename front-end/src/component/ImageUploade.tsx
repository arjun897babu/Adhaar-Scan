import React, { useState } from "react";

const ImageUploade: React.FC = () => {
  const [fileName, setFileName] = useState<string>("");
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);

      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setFileName("");
      setImageSrc(null);
    }
  };

  const handleImageClick = () => {
    document.getElementById("uploadInput")?.click();
  };

  return (
    
      <div className="max-w-sm bg-white rounded-lg shadow-md  ">
        <div className="px-4 py-6">
          <div
            id="image-preview"
            onClick={handleImageClick}
            className={`max-w-sm p-6 mb-4 bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg items-center mx-auto text-center cursor-pointer ${
              imageSrc ? "" : "flex items-center justify-center"
            }`}
          >
            <input
              id="uploadInput"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
            {!imageSrc ? (
              <label htmlFor="uploadInput" className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-gray-700 mx-auto mb-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                  />
                </svg>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">
                  Upload picture
                </h5>
                <p className="font-normal text-sm text-gray-400 md:px-6">
                  Choose photo size should be less than{" "}
                  <b className="text-gray-600">1mb</b>
                </p>
                <p className="font-normal text-sm text-gray-400 md:px-6">
                  and should be in <b className="text-gray-600"> bmp, jpg, png, pbm, webp</b> format.
                </p>
                <span id="filename" className="text-gray-500 bg-gray-200 z-50">
                  {fileName}
                </span>
              </label>
            ) : (
              <img
                src={imageSrc}
                alt="Image preview"
                className="max-h-48 rounded-lg mx-auto"
              />
            )}
          </div>
          <div className="flex items-center justify-center">
            <button
              onClick={handleImageClick}
              className="w-full text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center mr-2 mb-2 cursor-pointer"
            >
              <span className="text-center ml-2">Upload</span>
            </button>
          </div>
        </div>
      </div>
   );
};

export default ImageUploade;

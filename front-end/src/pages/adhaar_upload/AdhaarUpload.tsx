import React from "react"
import ImageUpload from "../../component/imageUpload/ImageUpload"
import { AdhaarUploadProps } from "./types"

const AdhaarUpload: React.FC<AdhaarUploadProps> = ({ loading, updateAdhaar, data }) => {

    return (
        <div id="adhaar-preview" className="adhaar-preview relative bg-gray-100 ">
            <div className="grid grid-cols-2 gap-2 py-4 justify-items-center   justify-center">
                <ImageUpload adhaarImage="front" updateAdhaar={updateAdhaar} />
                <ImageUpload adhaarImage="back" updateAdhaar={updateAdhaar} />
            </div>
            <div className={`${data ? 'hidden' : "float-right m-4 bg-gray-100 "}`}>
                <button
                    className={`${loading ? "pointer-events-none" : "rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none  transition duration-100 hover:bg-indigo-600   active:text-gray-700 md:text-base lg:inline-block"}`}>
                    {loading ? 'processing...' : 'extract data'}
                </button>
            </div>
        </div >
    )
}

export default AdhaarUpload
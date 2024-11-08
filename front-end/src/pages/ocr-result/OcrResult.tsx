import React from "react"
import { OcrResultProps } from "./types"

const OcrResult: React.FC<OcrResultProps> = ({ data }) => {

    console.log(data)
    return (
         
            <div className="py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2 data-container">
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="name"
                                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                            >
                                name
                            </label>
                            <input
                                name="name"
                                type="string"
                                value={data.name}
                                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="adhaar number"
                                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                            >
                                adhaar number
                            </label>
                            <input
                                name="adhaarNumber"
                                type="number"
                                value={data.aadhaarNumber}
                                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="dob"
                                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                            >
                                dob
                            </label>
                            <input
                                name="dob"
                                type="date"
                                value={data.dob}
                                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="gender"
                                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                            >
                                gender
                            </label>
                            <input
                                name="gender"
                                type="string"
                                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="message"
                                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                            >
                                address
                            </label>
                            <textarea
                                name="address"
                                 value={data.address}
                                className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                                defaultValue={""}
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="pincode"
                                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                            >
                                pincode
                            </label>
                            <input
                                name="pincode"
                                value={data.pincode}
                                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                            />
                        </div>
                    </div>
                </div>
            </div>


        
    )
}

export default OcrResult
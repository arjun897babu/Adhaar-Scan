import { BsClipboard2DataFill } from "react-icons/bs"
import { FaInfoCircle, FaUpload } from "react-icons/fa"
import { RiImageEditFill, RiQrScanFill } from "react-icons/ri"

const Home = () => {


    const getStarted = () => {
        const stepDiv = document.getElementById('steps')
        if (stepDiv) {
            stepDiv.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (

        <div className="bg-gray-100 mx-auto ">
            <header className="mb-8 mx-4 border-b py-4 md:mb-12 md:py-8 xl:mb-16">
                <div className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
                    aria-label="logo">
                    <RiQrScanFill className=" text-indigo-700" />
                    Adhaar scan
                </div>
            </header>
            <section className="flex flex-col items-center  min-h-screen">
                <div className="flex max-w-2xl flex-col items-center pb-16  text-center  ">
                    <h1 className="mb-8 text-6xl font-bold  text-indigo-500">
                        Quick & Easy Aadhaar Data Extraction
                    </h1>
                    <p className="font-bold leading-relaxed  text-gray-700">
                        AadhaarScan simplifies data extraction from your Aadhaar card.
                        Just upload the front and back images, and
                        our app uses OCR technology to accurately capture and generate key data from your Aadhaar card
                        in seconds.
                    </p>
                </div>
                <button
                    onClick={getStarted}
                    className="rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none  transition duration-100 hover:bg-indigo-600   active:text-gray-700 md:text-base lg:inline-block">
                    Get started
                </button>
            </section>
            <div className="grid gap-3 grid-cols-3 p-4" id="steps">
                <div className="relative rounded-lg bg-white p-5">
                    <span className="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white">
                        <FaInfoCircle />
                    </span>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-gray-400 uppercase">step 1</h3>
                        <h3 className="mb-7  capitalize text-lg font-bold text-indigo-500 md:text-xl">
                            upload your adhaar
                        </h3>
                    </div>

                    <FaUpload className="absolute right-4 top-8 text-indigo-500 " size={30} />

                    <p className="text-gray-500">
                        Upload both the front and back images of your Aadhaar card. Ensure the images are clear and legible, so the OCR can accurately capture the details. You can either take a photo or select images directly from your gallery.
                        Make sure there's no glare or shadows on the Aadhaar card for the best results.
                    </p>
                </div>
                <div className="relative rounded-lg bg-white p-5">
                    <span className="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white">
                        <FaInfoCircle />
                    </span>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-gray-400 uppercase">step 2</h3>
                        <h3 className="mb-7  capitalize text-lg font-bold text-indigo-500 md:text-xl">
                            edit and proceed
                        </h3>
                    </div>
                    <RiImageEditFill className="absolute right-4 top-8 text-indigo-500 " size={30} />
                    <p className="text-gray-500 leading-relaxed">
                        After uploading,if needed , you , you can manually edit any details to ensure accuracy before finalizing. This ensures that any OCR errors can be corrected easily.
                        Once you're satisfied with the data, click on "Process" to confirm.
                    </p>
                </div>
                <div className="relative rounded-lg bg-white p-5">
                    <span className="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white">
                        <FaInfoCircle />
                    </span>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-gray-400 uppercase">step 3</h3>
                        <h3 className="mb-7  capitalize text-lg font-bold text-indigo-500 md:text-xl">
                            extract data
                        </h3>
                    </div>
                    <BsClipboard2DataFill className="absolute right-4 top-8 text-indigo-500 " size={30} />
                    <p className="text-gray-500">
                        After processing, your data will be neatly displayed for easy access.
                    </p>
                </div>

            </div>

        </div>

    )
}

export default Home
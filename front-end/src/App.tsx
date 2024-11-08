import { useState } from 'react'
import './App.css'
import AdhaarUpload from './pages/adhaar_upload/AdhaarUpload'
import Home from './pages/home/Home'
import OcrResult from './pages/ocr-result/OcrResult'
import { ImageUploadProps } from './component/imageUpload/type'
import { server } from './service/axios'
import { OCRData } from './pages/ocr-result/types'

function App() {

  const [loading, setLoading] = useState(false)
  const [adhaarFrontFile, setAdhaarFrontFile] = useState<File | null>(null)
  const [adhaarBackFile, setAdhaarBackFile] = useState<File | null>(null)

  const updateAdhaarFile = (file: File, adhaarImage: ImageUploadProps['adhaarImage']) => {
    if (adhaarImage !== 'back' && adhaarImage !== 'front') {
      return
    }
    if (adhaarImage === 'front') {
      setAdhaarFrontFile(file)
    } else {
      setAdhaarBackFile(file)
    }
  }


  const [ocrResult, setOcrResult] = useState<OCRData | null>(null)

  async function extractAdhaar() {
    setLoading(true)
    try {

      if (!adhaarFrontFile && !adhaarBackFile) {
        return
      }

      const response = await server.post('/extractData', { adhaarBackFile, adhaarFrontFile })
      console.log(response)
      if (response) {
        setOcrResult(response.data)
      }

    } catch (error) {

    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Home />
      <AdhaarUpload updateAdhaar={updateAdhaarFile} loading={loading} data={ocrResult ? true : false} />
      {ocrResult && <OcrResult data={ocrResult} />}
    </>
  )
}

export default App

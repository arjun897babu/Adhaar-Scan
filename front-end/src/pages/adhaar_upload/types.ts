import { ImageUploadProps } from "../../component/imageUpload/type";

export type AdhaarUploadProps = {
  loading: boolean;
  updateAdhaar: (file: File,imageSide:ImageUploadProps['adhaarImage']) => void; 
  data?:boolean
};

import axios from "axios";

export const uploadImageInS3 = async (file,preSignedUrl) => {
    try {
        // Perform the upload
        const response = await axios.put(preSignedUrl, file);
        
        console.log('File uploaded successfully:', response);
        return response;
      } catch (error) {
        console.error('Error uploading file:', error);
      }
}

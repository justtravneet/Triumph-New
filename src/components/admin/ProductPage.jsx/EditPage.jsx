import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { createdProductIdAtom } from '../../../store/atoms/adminAtoms';
import Cookies from 'js-cookie';
import axios from 'axios';
import { uploadImageInS3 } from '../../../utils/uploadImageInS3';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import EditGallery from './EditGallery';
import EditProduct from './EditProduct';


const apiUrl = import.meta.env.VITE_URL;

export default function EditPage() {
    const navigate = useNavigate()
    const { product_id : product_id} = useParams()

    const [product, setProduct] = useState(null)


    useEffect(() => {
    

        // Fetch existing images
        const fetchProduct = async () => {
          try {
            const response = await axios.get(`${apiUrl}/product/${product_id}`, {
              headers: {
                'Authorization': `Bearer ${Cookies.get('adminToken')}`
              }
            });
            setProduct(response.data.data); // Assuming the response data has an "images" array
          } catch (error) {
            console.error('Error fetching existing images:', error);
          }
        };
    
        fetchProduct();
      }, [product_id, navigate]);
  return (
    <div>
      {product && <EditGallery product={product}/>}
      {product && <EditProduct product={product}/>}
    </div>
  )
}

import React, { useState } from "react"
import { Form, Header, Button } from "tabler-react"
import Body from "../../HOCs/Body"
import { Link } from "react-router-dom"
import { addProduct } from "../../../redux/action/product"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
const CreateProduct = ({ history }) => {
   const dispatch = useDispatch()
   const [name, setName] = useState("")
   const [countInStock, setcountInStock] = useState("")
   const [description, setdescription] = useState("")
   const [price, setPrice] = useState()
   const [category, setCategory] = useState()
   const [uploading, setUploading] = useState(false)
   const [image, setImage] = useState()
   const addproductHandler = () => {
      if (name !== "") {
         dispatch(
            addProduct({
               countInStock,
               description,
               price,
               name,
               category,
               image,
            })
         )
         history.push("/products")
      }
   }
   const uploadFileHandler = async (e) => {
      const file = e.target.files[0]
      const formData = new FormData()
      formData.append("image", file)
      setUploading(true)

      try {
         const config = {
            headers: {
               "Content-Type": "multipart/form-data",
            },
         }
         const { data } = await axios.post(
            "localhost:9000/api/upload",
            formData,
            config
         )
         console.log(data)
         setImage(data)
         setUploading(false)
      } catch (e) {
         console.log(e)
      }
   }
   return (
      <Body>
         {/* <Link to='/products'>Back</Link> */}
         <Form.FieldSet>
            <Header.H3>Create a product</Header.H3>

            <Form.Group label='Product name' isRequired>
               <Form.Input
                  name='example-text-input'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
               />
            </Form.Group>
            <Form.Group label='Description' isRequired>
               <Form.Input
                  name='example-text-input'
                  value={description}
                  onChange={(e) => setdescription(e.target.value)}
               />
            </Form.Group>
            <Form.Group label='price' isRequired>
               <Form.Input
                  name='example-text-input'
                  value={price}
                  type='number'
                  onChange={(e) => setPrice(e.target.value)}
               />
            </Form.Group>
            <Form.Group label='Category' className='mb-0'>
               <Form.Input
                  name='example-text-input'
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
               />
            </Form.Group>
            <Form.Group label='Stock' className='mb-0'>
               <Form.Input
                  name='example-text-input'
                  type='number'
                  value={countInStock}
                  onChange={(e) => setcountInStock(e.target.value)}
               />
            </Form.Group>
            <Form.Group label='Choose image' className='mb-0'>
               <Form.Input
                  id='image-file'
                  type='file'
                  // value={countInStock}
                  onChange={uploadFileHandler}
               />
            </Form.Group>
            <div style={{ marginTop: "25px" }}>
               <Button block color='primary' onClick={addproductHandler}>
                  Create
               </Button>
            </div>
         </Form.FieldSet>
      </Body>
   )
}

export default CreateProduct

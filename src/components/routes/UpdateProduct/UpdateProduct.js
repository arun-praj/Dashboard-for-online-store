import React, { useEffect, useState } from "react"
import { Form, Header, Button } from "tabler-react"
import Body from "../../HOCs/Body"
import { Link } from "react-router-dom"
import { addProduct } from "../../../redux/action/product"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
const UpdateProduct = ({ match, history }) => {
   const dispatch = useDispatch()
   const [countInStock, setcountInStock] = useState("")
   const [description, setdescription] = useState("")
   const [price, setPrice] = useState()
   const [category, setCategory] = useState()
   const [product, setProduct] = useState()
   const [loading, setLoading] = useState(true)
   const [name, setName] = useState("")

   const fetchProduct = async () => {
      const res = await axios.get(
         `${process.env.REACT_APP_PROXY}/api/products/${match.params.id}`
      )
      setProduct(res.data.data)
      setLoading(false)
      //   console.log(res)
   }
   useEffect(() => {
      fetchProduct()
   }, [])
   const addproductHandler = () => {
      //   if (name !== "") {
      dispatch(
         addProduct({
            countInStock: countInStock ? countInStock : product.countInStock,
            description: description ? description : product.description,
            price: price ? price : product.price,
            name: name ? name : product.name,
            category: category ? category : product.category,
         })
      )
      history.push("/products")
      //   }
   }
   return (
      <Body>
         {/* <Link to='/products'>Back</Link> */}
         {!loading && (
            <Form.FieldSet>
               <Header.H3>Update a product</Header.H3>

               <Form.Group label='Product name' isRequired>
                  <Form.Input
                     name='example-text-input'
                     placeholder={product.name ? product.name : name}
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                  />
               </Form.Group>
               <Form.Group label='Description' isRequired>
                  <Form.Input
                     name='example-text-input'
                     placeholder={
                        product.description ? product.description : description
                     }
                     value={description}
                     onChange={(e) => setdescription(e.target.value)}
                  />
               </Form.Group>
               <Form.Group label='price' isRequired>
                  <Form.Input
                     name='example-text-input'
                     placeholder={product.price ? product.price : price}
                     type='number'
                     value={price}
                     onChange={(e) => setPrice(e.target.value)}
                  />
               </Form.Group>
               <Form.Group label='Category' className='mb-0'>
                  <Form.Input
                     name='example-text-input'
                     placeholder={
                        product.category ? product.category : category
                     }
                     onChange={(e) => setCategory(e.target.value)}
                     value={category}
                  />
               </Form.Group>
               <Form.Group label='Stock' className='mb-0'>
                  <Form.Input
                     name='example-text-input'
                     type='number'
                     placeholder={
                        product.countInStock
                           ? product.countInStock
                           : countInStock
                     }
                     value={countInStock}
                     onChange={(e) => setcountInStock(e.target.value)}
                  />
               </Form.Group>
               <div style={{ marginTop: "25px" }}>
                  <Button block color='primary' onClick={addproductHandler}>
                     Update
                  </Button>
               </div>
            </Form.FieldSet>
         )}
      </Body>
   )
}

export default UpdateProduct

import React, { useState, useRef, useEffect, useMemo } from "react"
import { useDropzone } from "react-dropzone"
import moment from "moment"
import { usePromiseTracker } from "react-promise-tracker"
import { useDispatch, useSelector } from "react-redux"

//redux
import { connect } from "react-redux"
import { addProduct } from "../../../redux/action/product"
//components
import Body from "../../HOCs/Body"
// import Button from "../../ui/Button/Button"
import Spinner from "../../ui/Spinner/Spinner"
import { Table, Button, Badge } from "tabler-react"

const Products = (props) => {
   const dispatch = useDispatch()
   const { loading, products, count } = useSelector((state) => state.products)
   const deleteProduct = (e, id) => {
      e.preventDefault()
      console.log(id)
   }
   return (
      <Body>
         <div
            style={{
               padding: "10px",
            }}
         >
            <Table>
               <Table.Header>
                  <Table.ColHeader>ID</Table.ColHeader>
                  <Table.ColHeader>Name</Table.ColHeader>
                  <Table.ColHeader>Stocks available</Table.ColHeader>
                  <Table.ColHeader>Rating</Table.ColHeader>
                  <Table.ColHeader>No of reviews</Table.ColHeader>
                  <Table.ColHeader>Last Added </Table.ColHeader>

                  <Table.ColHeader>Action</Table.ColHeader>
               </Table.Header>
               <Table.Body>
                  {!loading &&
                     products &&
                     products.map((product) => {
                        return (
                           <Table.Row style={{ fontSize: "13px" }}>
                              <Table.Col>{product._id}</Table.Col>

                              <Table.Col>{product.name}</Table.Col>
                              <Table.Col>{product.countInStock}</Table.Col>
                              <Table.Col>{product.rating}</Table.Col>
                              <Table.Col>{product.numReviews}</Table.Col>
                              <Table.Col>{product.updatedAt}</Table.Col>

                              <Table.Col>
                                 <Button color='primary'>Edit</Button>
                                 <Button
                                    color='danger'
                                    onClick={(e) =>
                                       deleteProduct(e, product._id)
                                    }
                                 >
                                    Delete
                                 </Button>
                              </Table.Col>
                           </Table.Row>
                        )
                     })}
               </Table.Body>
            </Table>
         </div>
      </Body>
   )
}

export default Products

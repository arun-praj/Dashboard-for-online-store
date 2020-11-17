import React from "react"
import "./UserList.scss"
import Body from "../../HOCs/Body"
import { useDispatch, useSelector } from "react-redux"
import { Table, Button, Badge } from "tabler-react"
const UserList = () => {
   const dispatch = useDispatch()
   const { loading, customers, count, error } = useSelector(
      (state) => state.customers
   )
   const styles = (theme) => ({
      root: {
         width: "100%",
         marginTop: theme.spacing.unit * 3,
         overflowX: "auto",
      },
      table: {
         minWidth: 700,
      },
      tablecell: {
         fontSize: "40pt",
      },
   })

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
                  <Table.ColHeader>Status</Table.ColHeader>

                  <Table.ColHeader>Firstname</Table.ColHeader>
                  <Table.ColHeader>Lastname</Table.ColHeader>
                  <Table.ColHeader>Email</Table.ColHeader>
                  <Table.ColHeader>Contact</Table.ColHeader>
                  <Table.ColHeader>Subscription</Table.ColHeader>
                  <Table.ColHeader>Join at</Table.ColHeader>
                  <Table.ColHeader>Role</Table.ColHeader>

                  <Table.ColHeader>Action</Table.ColHeader>
               </Table.Header>
               <Table.Body>
                  {!loading &&
                     !error &&
                     customers &&
                     customers.map((customer) => {
                        return (
                           <Table.Row style={{ fontSize: "13px" }}>
                              <Table.Col>{customer._id}</Table.Col>
                              <Table.Col>{customer.status}</Table.Col>
                              <Table.Col>{customer.firstName}</Table.Col>
                              <Table.Col>{customer.lastName}</Table.Col>
                              <Table.Col>{customer.email}</Table.Col>
                              <Table.Col>{customer.contact}</Table.Col>

                              <Table.Col>
                                 {customer.subscribeToNews.toString() ===
                                 "true" ? (
                                    <Badge color='success'>
                                       {customer.subscribeToNews.toString()}
                                    </Badge>
                                 ) : (
                                    customer.subscribeToNews.toString()
                                 )}
                              </Table.Col>
                              <Table.Col>{customer.createdAt}</Table.Col>
                              <Table.Col>
                                 {customer.role === "admin" ? (
                                    <Badge color='info'>{customer.role}</Badge>
                                 ) : (
                                    customer.role
                                 )}
                              </Table.Col>
                              <Table.Col>
                                 <Button color='primary'>Edit</Button>
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

export default UserList

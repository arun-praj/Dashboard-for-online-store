import React, { useState } from "react"
import "./UserList.scss"
import Body from "../../HOCs/Body"
import { useDispatch, useSelector } from "react-redux"
import { Table, Button, Badge, Form } from "tabler-react"
import axios from "axios"
import "./UserList.scss"
const UserList = () => {
   const dispatch = useDispatch()
   const [showMailModal, setShowMailModal] = useState(false)
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
            <MailModal
               showMailModal={showMailModal}
               setShowMailModal={setShowMailModal}
            />
            <div style={{ padding: "0 0 16px 0" }}>
               <Button.List>
                  <Button
                     icon='mail'
                     color='primary'
                     outline
                     onClick={(prev) => setShowMailModal(!prev.showMailModal)}
                  >
                     Send mail
                  </Button>
               </Button.List>
            </div>

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

const MailModal = ({ showMailModal, setShowMailModal }) => {
   const [isChecked, setIsChecked] = useState(false)
   const [to, setTo] = useState("")
   const [subject, setSubject] = useState("")
   const [message, setMessage] = useState("")

   const sendMail = async () => {
      const config = {
         headers: {
            "Content-Type": "application/json",
         },
      }

      await axios.post(
         `${process.env.REACT_APP_PROXY}/api/mail`,
         {
            mailToall: isChecked,
            to,
            subject,
            message,
         },
         config
      )

      // console.log(mail.data)
      // setShowMailModal(false)
      // {,
   }

   return (
      <div
         style={{
            // height: "30vh",
            width: "30vw",
            backgroundColor: "#efefef",
            display: showMailModal ? "block" : "none",
            // background: "#fff",
            border: "1px solid #dcdadb",
            position: "absolute",
            left: "50%",
            top: "50%",
            // fontSize: "16px",
            transform: "translate(-20%,-80%)",
            transition: "display 1s ease",
            padding: "0 16px 16px",
         }}
      >
         <div
            style={{
               // position: "absolute",
               left: "10px",
               top: "10px",
               fontSize: "16px",
               paddingBottom: "16px",
            }}
            className='close_btn'
            onClick={() => setShowMailModal(false)}
         >
            Close
         </div>
         <div>
            {/* <Form.FieldSet> */}
            <Form.Group label='To' isRequired style={{ fontSize: "13px" }}>
               <Form.Input
                  name='example-text-input'
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  style={{ fontSize: "13px" }}
               />
            </Form.Group>

            <div>
               <input
                  type='checkbox'
                  id='asdf'
                  checked={isChecked}
                  onClick={() => setIsChecked(!isChecked)}
               />
               <label htmlFor='asdf' style={{ marginLeft: "10px" }}>
                  Send mail to all subscribers
               </label>
            </div>

            <Form.Group label='Subject' isRequired>
               <Form.Input
                  name='example-text-input'
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
               />
            </Form.Group>
            <Form.Group label='Message' isRequired>
               <textarea
                  style={{
                     width: "100%",
                     height: "100px",
                     border: "1px solid #dcdadb",
                  }}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
               ></textarea>
            </Form.Group>
            <Button block color='primary' onClick={sendMail}>
               Send mail
            </Button>
            {/* </Form.FieldSet> */}
         </div>
      </div>
   )
}

export default UserList

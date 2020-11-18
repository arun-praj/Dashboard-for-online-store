import React, { useEffect, useState } from "react"
import "./Dashboard.scss"
import Body from "../../HOCs/Body"
import Button from "../../ui/Button/Button"
import Spinner from "../../ui/Spinner/Spinner"
// import { ResponsiveLine } from "@nivo/line"
import { Grid, Page, StatsCard } from "tabler-react"
import { Bar, Line, Pie } from "react-chartjs-2"
import axios from "axios"

import "tabler-react/dist/Tabler.css"
const { ipcRenderer } = window.require("electron")

const Dashboard = () => {
   const [barData, setBarData] = useState({
      labels: ["a", "b", "c"],
      datasets: [
         {
            label: "name",
            data: [12, 23, 25],
            borderWidth: 4,
         },
      ],
      // y: [1, 2, 4],
   })
   const [lineData, setLineData] = useState({
      x: ["a", "b", "c"],
      y: [1, 2, 4],
   })
   const [pieData, setPieData] = useState({
      x: ["a", "b", "c"],
      y: [1, 2, 4],
   })
   useEffect(() => {
      ipcRenderer.send("get-token", "Gimee")
      ipcRenderer.on("token-reply", async (event, arg) => {
         if (arg !== undefined) {
            // console.log(status)
            let body
            const config = {
               headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${arg}`,
               },
            }

            const res = await axios.put(
               `http://localhost:9000/api/products`,
               body,
               config
            )
            // dispatch(getOrderDetails(sort))

            console.log(res.data)
         }
      })
   })
   return (
      <Body>
         <div className='grid__box grid__box--1'>
            <Page.Content title='Dashboard'>
               <Grid.Row>
                  <Grid.Col width={6} sm={4} lg={2}>
                     <StatsCard
                        layout={1}
                        movement={6}
                        total='43'
                        label='New Tickets'
                     />
                  </Grid.Col>
                  <Grid.Col width={6} sm={4} lg={2}>
                     <StatsCard
                        layout={1}
                        movement={-3}
                        total='17'
                        label='Closed Today'
                     />
                  </Grid.Col>
                  <Grid.Col width={6} sm={4} lg={2}>
                     <StatsCard
                        layout={1}
                        movement={9}
                        total='7'
                        label='New Replies'
                     />
                  </Grid.Col>
                  <Grid.Col width={6} sm={4} lg={2}>
                     <StatsCard
                        layout={1}
                        movement={3}
                        total='27.3k'
                        label='Followers'
                     />
                  </Grid.Col>
               </Grid.Row>

               <div style={{ width: "100%", maxHeight: "100px" }}>
                  <Bar
                     data={barData.dataSet}
                     // height={100}
                     options={{
                        maintainAspectRatio: true,
                        title: {
                           display: true,
                           text: "Products in inventory",
                        },
                        // maintainAspectRatio: false,
                     }}
                  />
                  {/* <ResponsiveLine
                     data={data}
                     margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                     xScale={{ type: "point" }}
                     yScale={{
                        type: "linear",
                        min: "auto",
                        max: "auto",
                        stacked: true,
                        reverse: false,
                     }}
                     yFormat=' >-.2f'
                     axisTop={null}
                     axisRight={null}
                     axisBottom={{
                        orient: "bottom",
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: "transportation",
                        legendOffset: 36,
                        legendPosition: "middle",
                     }}
                     axisLeft={{
                        orient: "left",
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: "count",
                        legendOffset: -40,
                        legendPosition: "middle",
                     }}
                     pointSize={10}
                     pointColor={{ theme: "background" }}
                     pointBorderWidth={2}
                     pointBorderColor={{ from: "serieColor" }}
                     pointLabelYOffset={-12}
                     useMesh={true}
                     legends={[
                        {
                           anchor: "bottom-right",
                           direction: "column",
                           justify: false,
                           translateX: 100,
                           translateY: 0,
                           itemsSpacing: 0,
                           itemDirection: "left-to-right",
                           itemWidth: 80,
                           itemHeight: 20,
                           itemOpacity: 0.75,
                           symbolSize: 12,
                           symbolShape: "circle",
                           symbolBorderColor: "rgba(0, 0, 0, .5)",
                           effects: [
                              {
                                 on: "hover",
                                 style: {
                                    itemBackground: "rgba(0, 0, 0, .03)",
                                    itemOpacity: 1,
                                 },
                              },
                           ],
                        },
                     ]}
                  /> */}
               </div>
            </Page.Content>
         </div>
      </Body>
   )
}

export default Dashboard

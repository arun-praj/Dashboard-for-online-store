import React from "react"
import "./Dashboard.scss"
import Body from "../../HOCs/Body"
import Button from "../../ui/Button/Button"
import Spinner from "../../ui/Spinner/Spinner"
import { ResponsiveLine } from "@nivo/line"
import { Grid, Page, StatsCard } from "tabler-react"

import "tabler-react/dist/Tabler.css"

const data = [
   {
      id: "japan",
      color: "hsl(300, 70%, 50%)",
      data: [
         {
            x: "plane",
            y: 233,
         },
         {
            x: "helicopter",
            y: 204,
         },
         {
            x: "boat",
            y: 165,
         },
         {
            x: "train",
            y: 279,
         },
         {
            x: "subway",
            y: 268,
         },
         {
            x: "bus",
            y: 148,
         },
         {
            x: "car",
            y: 227,
         },
         {
            x: "moto",
            y: 107,
         },
         {
            x: "bicycle",
            y: 7,
         },
         {
            x: "horse",
            y: 99,
         },
         {
            x: "skateboard",
            y: 40,
         },
         {
            x: "others",
            y: 19,
         },
      ],
   },
   {
      id: "france",
      color: "hsl(31, 70%, 50%)",
      data: [
         {
            x: "plane",
            y: 82,
         },
         {
            x: "helicopter",
            y: 189,
         },
         {
            x: "boat",
            y: 109,
         },
         {
            x: "train",
            y: 209,
         },
         {
            x: "subway",
            y: 50,
         },
         {
            x: "bus",
            y: 293,
         },
         {
            x: "car",
            y: 0,
         },
         {
            x: "moto",
            y: 133,
         },
         {
            x: "bicycle",
            y: 124,
         },
         {
            x: "horse",
            y: 270,
         },
         {
            x: "skateboard",
            y: 96,
         },
         {
            x: "others",
            y: 136,
         },
      ],
   },
   {
      id: "us",
      color: "hsl(151, 70%, 50%)",
      data: [
         {
            x: "plane",
            y: 124,
         },
         {
            x: "helicopter",
            y: 185,
         },
         {
            x: "boat",
            y: 94,
         },
         {
            x: "train",
            y: 61,
         },
         {
            x: "subway",
            y: 159,
         },
         {
            x: "bus",
            y: 52,
         },
         {
            x: "car",
            y: 73,
         },
         {
            x: "moto",
            y: 102,
         },
         {
            x: "bicycle",
            y: 8,
         },
         {
            x: "horse",
            y: 253,
         },
         {
            x: "skateboard",
            y: 294,
         },
         {
            x: "others",
            y: 297,
         },
      ],
   },
   {
      id: "germany",
      color: "hsl(4, 70%, 50%)",
      data: [
         {
            x: "plane",
            y: 192,
         },
         {
            x: "helicopter",
            y: 287,
         },
         {
            x: "boat",
            y: 163,
         },
         {
            x: "train",
            y: 261,
         },
         {
            x: "subway",
            y: 21,
         },
         {
            x: "bus",
            y: 270,
         },
         {
            x: "car",
            y: 154,
         },
         {
            x: "moto",
            y: 59,
         },
         {
            x: "bicycle",
            y: 137,
         },
         {
            x: "horse",
            y: 206,
         },
         {
            x: "skateboard",
            y: 28,
         },
         {
            x: "others",
            y: 0,
         },
      ],
   },
   {
      id: "norway",
      color: "hsl(155, 70%, 50%)",
      data: [
         {
            x: "plane",
            y: 84,
         },
         {
            x: "helicopter",
            y: 165,
         },
         {
            x: "boat",
            y: 153,
         },
         {
            x: "train",
            y: 27,
         },
         {
            x: "subway",
            y: 237,
         },
         {
            x: "bus",
            y: 114,
         },
         {
            x: "car",
            y: 222,
         },
         {
            x: "moto",
            y: 12,
         },
         {
            x: "bicycle",
            y: 180,
         },
         {
            x: "horse",
            y: 96,
         },
         {
            x: "skateboard",
            y: 18,
         },
         {
            x: "others",
            y: 18,
         },
      ],
   },
]
const Dashboard = () => {
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

               <div style={{ width: "400px" }}>
                  <ResponsiveLine
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
                  />
               </div>
            </Page.Content>
         </div>
      </Body>
   )
}

export default Dashboard

import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Assignment-1",
    marks: 60,
  },
  {
    name: "Assignment-2",
    marks: 60,
  },
  {
    name: "Assignment-3",
    marks: 60,
  },
  {
    name: "Assignment-4",
    marks: 50,
  },
  {
    name: "Assignment-5",
    marks: 60,
  },
  {
    name: "Assignment-6",
    marks: 57,
  },
  {
    name: "Assignment-7",
    marks: 60,
  },
  {
    name: "Assignment-8",
    marks: 60,
  },
];

export default class Example extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/s/area-chart-in-responsive-container-e6dx0";

  render() {
    return (
      <div className="my-container" style={{ width: "100%", height: 800 }}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 40,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="marks"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
        <h1 className="text-center mt-12 text-4xl font-bold">
          Assignment Marks Analytics
        </h1>
      </div>
    );
  }
}

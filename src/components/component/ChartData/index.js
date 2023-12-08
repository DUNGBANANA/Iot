import React from "react";
import "./main.scss";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import useFetch from "../../../hook/usefetch";
// import { Legend } from "chart.js";

const dataChart = [
  { name: "Tháng 1", doanhSo: 300 },
  { name: "Tháng 2", doanhSo: 450 },
  { name: "Tháng 3", doanhSo: 600 },
  { name: "Tháng 4", doanhSo: 800 },
  { name: "Tháng 5", doanhSo: 1000 },
];



export default function ChartData({ dataDetails }) {
  console.log(dataDetails)
  const { data } = useFetch("/device/getDeviceDataLatestTime", {
    session_id: "fd55e244-695a-46e3-9f06-512eb21bdcd2",
    device_id: dataDetails?.ID,
  });


  const data_airQuality = data?.list_result?.map((item) => ({
    ID: item.ID,
    air_quality: item.data_details.air_quality,
  }));
  const data_doam = data?.list_result?.map((item) => ({
    ID: item.ID,
    do_am: item.data_details.do_am,
  }));
  const data_nhietdo = data?.list_result?.map((item) => ({
    ID: item.ID,
    nhietdo: item.data_details.nhietdo,
  }));

  
  return (
    dataDetails?.type_id === 1 ?
    <div className="chart">
      <h4>Biểu đồ dữ liệu</h4>
      <LineChart width={800} height={300} data={data_airQuality}>
        <XAxis dataKey="ID" />
        <YAxis/>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line
          type="monotone"
          dataKey="air_quality"
          stroke= "black"
        />
        <Tooltip />
        <Legend />
      </LineChart>

      <LineChart width={800} height={300} data={data_doam}>
        <XAxis dataKey="ID" />
        <YAxis/>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line
          type="monotone"
          dataKey="do_am"
          stroke= "black"
        />
        <Tooltip />
        <Legend />
      </LineChart>

      <LineChart width={800} height={300} data={data_nhietdo}>
        <XAxis dataKey="ID" />
        <YAxis/>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line
          type="monotone"
          dataKey="nhietdo"
          stroke= "black"
        />
        <Tooltip />
        <Legend />
      </LineChart>
    </div>
    : <div className="chart"><h4>Không có dữ liệu cho thiết bị điều khiển</h4></div>
  );
}

import { IoAnalyticsSharp } from "react-icons/io5";
import {
  LineChart,
  Line,
  XAxis,
  Legend,
  CartesianGrid,
  Tooltip,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { Heading } from "../../ui";
import s from "./styles.module.scss";

export function Chart({ title, data, dataKey, grid }) {
  return (
    <div className={s.chart}>
      <Heading small bold customClass={s.title}>
        <IoAnalyticsSharp />
        {title}
      </Heading>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <YAxis />
          <Legend />
          <XAxis dataKey="name" stroke="#212529" />
          <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="3 3" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

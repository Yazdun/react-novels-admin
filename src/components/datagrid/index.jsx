import "react-loading-skeleton/dist/skeleton.css";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import s from "./styles.module.scss";
import PropTypes from "prop-types";
import { Loading } from "..";

export const Datagrid = ({ data, columns, gridStyle, limit, loading }) => {
  return (
    <div className={s.datagrid}>
      {loading ? (
        <Loading height={gridStyle.minHeight} count={1} />
      ) : (
        <ReactDataGrid
          idProperty="_id"
          style={gridStyle}
          columns={columns}
          dataSource={data}
          pagination="true"
          limit={limit}
        />
      )}
    </div>
  );
};

Datagrid.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array,
  limit: PropTypes.number,
  gridStyle: PropTypes.object,
  loading: PropTypes.bool,
};

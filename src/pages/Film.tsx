import { Alert, Spin, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilmsAsync } from "../utils/api";
import type { RootState, AppDispatch } from "../redux/store";
import { useEffect } from 'react';

export function Film() {

  const dispatch: AppDispatch = useDispatch();
  const { films, loading, error } = useSelector((state: RootState) => state.films);

  useEffect(() => {
    dispatch(fetchFilmsAsync());
  }, [dispatch]);

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Director',
      dataIndex: 'director',
      key: 'director',
    },
    {
      title: 'Release Date',
      dataIndex: 'release_date',
      key: 'release_date',
    },
  ]

  return(
    <div>
      {loading ? 
      (
        <Spin spinning={loading}/>
      ) : error ? (
        <Alert message=""description={error} type="error" showIcon />
      ) : (
        <Table 
          bordered
          dataSource={films}
          columns={columns}
          rowKey="title"
          pagination={false}
        />
      )}
    </div>
  );
}
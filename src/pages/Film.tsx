import { Alert, List, Spin } from "antd";
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

  return(
    <div>
      {loading ? 
      (
        <Spin spinning={loading}/>
      ) : error ? (
        <Alert message=""description={error} type="error" showIcon />
      ) : (
        <List
          bordered
          dataSource={films}
          renderItem={(film) => (
            <List.Item>
              <strong>{film.title}</strong> - Directed by {film.director}, Released on {film.release_date}
            </List.Item>
          )}
        />
      )}
    </div>
  );
}
import { Alert, Spin, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilmsAsync } from "../utils/api";
import type { RootState, AppDispatch } from "../redux/store";
import { useEffect, useState } from 'react';
import { SearchInput } from "../components/SearchInput";

export function Film() {
  const dispatch: AppDispatch = useDispatch();
  const { films, loading, error } = useSelector((state: RootState) => state.films);

  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    dispatch(fetchFilmsAsync());
  }, [dispatch]);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const filteredFilms = films.filter(film =>
    film.title.toLowerCase().includes(searchValue.toLowerCase())
  );

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
        <>
          <SearchInput value={searchValue} onChange={handleSearchChange} />
          <Table
            bordered
            dataSource={filteredFilms}
            columns={columns}
            rowKey="title"
            pagination={false}
          />
        </>
      )}
    </div>
  );
}

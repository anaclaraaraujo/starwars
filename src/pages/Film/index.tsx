import { Alert, Col, Row, Spin, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilmsAsync } from "../../utils/api";
import type { RootState, AppDispatch } from "../../redux/store";
import { useEffect, useState } from 'react';
import { SearchInput } from "../../components/SearchInput";
import { Filter } from "../../components/Filter";
import { Layout } from "../../components/Layout";

export function Film() {
  const dispatch: AppDispatch = useDispatch();
  const { films, loading, error } = useSelector((state: RootState) => state.films);

  const [searchValue, setSearchValue] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [yearOptions, setYearOptions] = useState<string[]>([]);
  const [setSelectedFilm] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchFilmsAsync());
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (films.length > 0) {
      const years = Array.from(new Set(films.map(film => film.release_date.split('-')[0])));
      setYearOptions(years);
    }
  }, [films]);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleYearChange = (value: string) => {
    setSelectedYear(value);
  };

  const handleRowClick = (film: any) => {
    setSelectedFilm(film);
  };

  const filteredFilms = films.filter(film => {
    const matchesTitle = film.title.toLowerCase().includes(searchValue.toLowerCase());
    const matchesYear = selectedYear ? film.release_date.startsWith(selectedYear) : true;
    return matchesTitle && matchesYear;
  });

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      onCell: (record: any) => ({
        onClick: () => handleRowClick(record),
      }),
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
  ];

  return (
    <Layout>
      {loading ?
        (
          <Spin spinning={loading} />
        ) : error ? (
          <Alert message="" description={error} type="error" showIcon />
        ) : (
          <>
            <Row gutter={16} style={{ marginBottom: '16px' }}>
              <Col span={18}>
                <SearchInput value={searchValue} onChange={handleSearchChange} />
              </Col>
              <Col span={6}>
                <Filter
                  options={yearOptions.map(year => ({ value: year, label: year }))}
                  selectedValue={selectedYear}
                  onChange={handleYearChange}
                  placeholder="Select a year"
                />
              </Col>
            </Row>
            <div style={{ maxWidth: '100%' }}>
              <Table
                bordered
                dataSource={filteredFilms}
                columns={columns}
                rowKey="title"
                pagination={false}
              />
            </div>
          </>
        )}
    </Layout>
  );
}

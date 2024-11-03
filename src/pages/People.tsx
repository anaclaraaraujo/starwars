import { Alert, Spin, Table, Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeopleAsync } from "../utils/api";
import type { RootState, AppDispatch } from "../redux/store";
import { useEffect, useState } from 'react';
import type { Person } from "../types/interface";

export function People() {
  const dispatch: AppDispatch = useDispatch();
  const { people, loading, error} = useSelector((state: RootState) => state.people);
  const [, setSelectedPerson] = useState<Person | null>(null);
  const [searchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    dispatch(fetchPeopleAsync(currentPage));
  }, [dispatch, currentPage]);


  const handlePersonClick = (person: Person) => {
    setSelectedPerson(person);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };


  const filteredPeople = people.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, record: Person) => (
        <span onClick={() => handlePersonClick(record)} style={{ cursor: 'pointer' }}>
          {text}
        </span>
      ),
    },
    {
      title: 'Height',
      dataIndex: 'height',
      key: 'height',
    },
    {
      title: 'Mass',
      dataIndex: 'mass',
      key: 'mass',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
  ];

  return (
    <div>
      {loading ? (
        <Spin spinning={loading} />
      ) : error ? (
        <Alert message="Error" description={error} type="error" showIcon />
      ) : (
        <>
          <Table
            bordered
            dataSource={filteredPeople}
            columns={columns}
            rowKey="name"
            pagination={false}
          />
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Pagination
              current={currentPage}
              pageSize={10}
              total={82}
              onChange={handlePageChange}
              showSizeChanger={false}
              showQuickJumper={false}
            />
          </div>
        </>
      )}
    </div>
  );
}

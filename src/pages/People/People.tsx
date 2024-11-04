import { Alert, Spin, Table, Col, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeopleAsync } from "../../utils/api";
import type { RootState, AppDispatch } from "../../redux/store";
import { useEffect, useState } from 'react';
import type { Person } from "../../types/interface";
import { Filter } from "../../components/Filter";
import { SearchInput } from "../../components/SearchInput";
import { Layout } from "../../components/Layout";
import { CustomPagination } from '../../style/global';
import { PersonModal } from '../../components/PersonModal/index';

export function People() {
  const dispatch: AppDispatch = useDispatch();
  const { loading, error } = useSelector((state: RootState) => state.people);
  const [allPeople, setAllPeople] = useState<Person[]>([]);
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [genderOptions, setGenderOptions] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const allPeopleData = await dispatch(fetchPeopleAsync()).unwrap();
      setAllPeople(allPeopleData);
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (allPeople.length > 0) {
      const genders = Array.from(new Set(allPeople.map(person => person.gender))).filter(g => g);
      setGenderOptions(genders);
    }
  }, [allPeople]);

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const handleGenderChange = (value: string) => {
    setSelectedGender(value);
  };

  const handlePersonClick = (person: Person) => {
    setSelectedPerson(person);
    setModalVisible(true); // Abre o modal
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const filteredPeople = allPeople.filter(person => {
    const matchesName = person.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGender = selectedGender ? person.gender === selectedGender : true;
    return matchesName && matchesGender;
  });

  const sortedPeople = filteredPeople.sort((a, b) => a.name.localeCompare(b.name));

  const pageSize = 10;
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedPeople = sortedPeople.slice(startIndex, startIndex + pageSize);

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
    <Layout>
      {loading ? (
        <Spin spinning={loading} />
      ) : error ? (
        <Alert message="Error" description={error} type="error" showIcon />
      ) : (
        <>
          <Row gutter={16} style={{ marginBottom: '16px' }}>
            <Col span={18}>
              <SearchInput value={searchTerm} onChange={handleSearchChange} />
            </Col>
            <Col span={6}>
              <Filter
                options={genderOptions.map(gender => ({ value: gender, label: gender }))}
                selectedValue={selectedGender}
                onChange={handleGenderChange}
                placeholder="Select gender"
              />
            </Col>
          </Row>
          <div style={{ maxWidth: '100%' }}>
            <Table
              bordered
              dataSource={paginatedPeople}
              columns={columns}
              rowKey="name"
              pagination={false}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <CustomPagination
              current={currentPage}
              pageSize={pageSize}
              total={sortedPeople.length}
              onChange={handlePageChange}
              showSizeChanger={false}
              showQuickJumper={false}
            />
          </div>

          <PersonModal
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
            person={selectedPerson}
          />
        </>
      )}
    </Layout>
  );
}

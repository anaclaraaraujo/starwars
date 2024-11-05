import { Alert, Spin, Table, Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpeciesAsync } from "../utils/api";
import type { RootState, AppDispatch } from "../redux/store";
import { useEffect, useState } from 'react';
import type { Species } from "../types/interface";
import { Filter } from "../components/Filter";
import { SearchInput } from "../components/SearchInput";
import { Layout } from "../components/Layout";
import { CustomPagination } from "../style/global";

export function Species() {
  const dispatch: AppDispatch = useDispatch();
  const { loading, error, species } = useSelector((state: RootState) => state.species);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClassification, setSelectedClassification] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    dispatch(fetchSpeciesAsync());
  }, [dispatch]);

  const classifications = Array.from(new Set(species.map(s => s.classification)));

  const filteredSpecies = species.filter(s =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedClassification ? s.classification === selectedClassification : true)
  );

  const startIndex = (currentPage - 1) * pageSize;
  const paginatedSpecies = filteredSpecies.slice(startIndex, startIndex + pageSize);

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Classification', dataIndex: 'classification', key: 'classification' },
    { title: 'Average Lifespan', dataIndex: 'average_lifespan', key: 'average_lifespan' },
    { title: 'Homeworld', dataIndex: 'homeworld', key: 'homeworld' },
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
            <Col span={12}>
              <SearchInput value={searchTerm} onChange={(value) => setSearchTerm(value)} />
            </Col>
            <Col span={12}>
              <Filter
                options={classifications.map(classification => ({ value: classification, label: classification }))}
                selectedValue={selectedClassification}
                onChange={setSelectedClassification}
                placeholder="Filter by Classification"
              />
            </Col>
          </Row>
          <Table
            bordered
            dataSource={paginatedSpecies}
            columns={columns}
            rowKey="name"
            pagination={false}
          />
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <CustomPagination
              current={currentPage}
              pageSize={pageSize}
              total={filteredSpecies.length}
              onChange={(page) => setCurrentPage(page)}
              showSizeChanger={false}
              showQuickJumper={false}
            />
          </div>
        </>
      )}
    </Layout>
  );
}

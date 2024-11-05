import { Alert, Spin, Table, Col, Row, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlanetsAsync } from "../utils/api";
import type { RootState, AppDispatch } from "../redux/store";
import { useEffect, useState } from 'react';
import { SearchInput } from "../components/SearchInput";
import { Layout } from "../components/Layout";
import { CustomPagination } from "../style/global";

const { Option } = Select;

export function Planets() {
  const dispatch: AppDispatch = useDispatch();
  const { loading, error, planets } = useSelector((state: RootState) => state.planets);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedClimate, setSelectedClimate] = useState<string | undefined>(undefined);
  const pageSize = 10;

  useEffect(() => {
    dispatch(fetchPlanetsAsync());
  }, [dispatch]);

  const filteredPlanets = planets
    .filter(planet => planet.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(planet => {
      if (!selectedClimate) return true;
      return planet.climate.toLowerCase() === selectedClimate.toLowerCase();
    });

  const startIndex = (currentPage - 1) * pageSize;
  const paginatedPlanets = filteredPlanets.slice(startIndex, startIndex + pageSize);

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Climate', dataIndex: 'climate', key: 'climate' },
    { title: 'Terrain', dataIndex: 'terrain', key: 'terrain' },
    { title: 'Population', dataIndex: 'population', key: 'population' },
  ];

  const uniqueClimates = Array.from(new Set(planets.map(planet => planet.climate)));

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
              <SearchInput value={searchTerm} onChange={(value) => setSearchTerm(value)} />
            </Col>
            <Col span={6}>
              <Select
                placeholder="Filter by climate"
                onChange={(value) => setSelectedClimate(value)}
                style={{ width: '100%' }}
                allowClear
              >
                {uniqueClimates.map((climate, index) => (
                  <Option key={index} value={climate}>
                    {climate}
                  </Option>
                ))}
              </Select>
            </Col>
          </Row>

          <div style={{maxWidth: '100%' }}>
            <Table
              bordered
              dataSource={paginatedPlanets}
              columns={columns}
              rowKey="name"
              pagination={false}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
            <CustomPagination
              current={currentPage}
              pageSize={pageSize}
              total={filteredPlanets.length}
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

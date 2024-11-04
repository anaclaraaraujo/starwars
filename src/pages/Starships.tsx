import { Alert, Spin, Table, Pagination, Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchStarshipsAsync } from "../utils/api";
import type { RootState, AppDispatch } from "../redux/store";
import { useEffect, useState } from 'react';
import { Filter } from "../components/Filter";
import { SearchInput } from "../components/SearchInput";

export function Starships() {
  const dispatch: AppDispatch = useDispatch();
  const { loading, error, starships } = useSelector((state: RootState) => state.starships);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedModel, setSelectedModel] = useState<string>("");

  const pageSize = 10;

  useEffect(() => {
    dispatch(fetchStarshipsAsync());
  }, [dispatch]);

  const filteredStarships = starships.filter(starship =>
    starship.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedModel ? starship.model.toLowerCase() === selectedModel.toLowerCase() : true)
  );

  const startIndex = (currentPage - 1) * pageSize;
  const paginatedStarships = filteredStarships.slice(startIndex, startIndex + pageSize);

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Model', dataIndex: 'model', key: 'model' },
    { title: 'Manufacturer', dataIndex: 'manufacturer', key: 'manufacturer' },
    { title: 'Cost', dataIndex: 'cost_in_credits', key: 'cost_in_credits' },
  ];

  const modelOptions = [...new Set(starships.map(starship => starship.model))].map(model => ({ value: model, label: model }));

  return (
    <div>
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
                options={modelOptions}
                selectedValue={selectedModel}
                onChange={setSelectedModel}
                placeholder="Select Model"
              />
            </Col>
          </Row>
          <Table
            bordered
            dataSource={paginatedStarships}
            columns={columns}
            rowKey="name"
            pagination={false}
          />
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={filteredStarships.length}
              onChange={(page) => setCurrentPage(page)}
              showSizeChanger={false}
              showQuickJumper={false}
            />
          </div>

        </>
      )}
    </div>
  );
}
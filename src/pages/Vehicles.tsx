import { Alert, Spin, Table, Pagination, Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchVehiclesAsync } from "../utils/api";
import type { RootState, AppDispatch } from "../redux/store";
import { useEffect, useState } from 'react';
import { Filter } from "../components/Filter";
import { SearchInput } from "../components/SearchInput";

export function Vehicles() {
  const dispatch: AppDispatch = useDispatch();
  const { loading, error, vehicles } = useSelector((state: RootState) => state.vehicles);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedVehicleClass, setSelectedVehicleClass] = useState<string>("");

  const pageSize = 10;

  useEffect(() => {
    dispatch(fetchVehiclesAsync());
  }, [dispatch]);

  const filteredVehicles = vehicles.filter(vehicle => 
    vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedVehicleClass ? vehicle.vehicle_class.toLowerCase() === selectedVehicleClass.toLowerCase() : true)
  );

  const startIndex = (currentPage - 1) * pageSize;
  const paginatedVehicles = filteredVehicles.slice(startIndex, startIndex + pageSize);

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Model', dataIndex: 'model', key: 'model' },
    { title: 'Vehicle Class', dataIndex: 'vehicle_class', key: 'vehicle_class' },
    { title: 'Manufacturer', dataIndex: 'manufacturer', key: 'manufacturer' },
  ];

  const vehicleClassOptions = Array.from(new Set(vehicles.map(vehicle => vehicle.vehicle_class))).map(vehicleClass => ({
    value: vehicleClass,
    label: vehicleClass,
  }));

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
                options={vehicleClassOptions}
                selectedValue={selectedVehicleClass}
                onChange={setSelectedVehicleClass}
                placeholder="Select Vehicle Class"
              />
            </Col>
          </Row>
          <Table
            bordered
            dataSource={paginatedVehicles}
            columns={columns}
            rowKey="name"
            pagination={false}
          />
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={filteredVehicles.length}
            onChange={(page) => setCurrentPage(page)}
            showSizeChanger={false}
            showQuickJumper={false}
          />
        </>
      )}
    </div>
  );
}
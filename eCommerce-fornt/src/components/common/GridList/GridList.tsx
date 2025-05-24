import {Col, Row} from 'react-bootstrap'

type GridListProps<T> = {
    records: T[],
    recordItem: (record:T) => React.ReactNode
}

type HasId = {id?: number}

const GridList = <T extends HasId> ({records, recordItem}: GridListProps<T>) => {
    const categoriesList = records.length > 0 ? records.map(record => (
    <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2" key={record.id}>
        {recordItem(record)}
    </Col>
)) : 'There are no categories'

  return (
    <Row>
        {categoriesList}
    </Row>
  )
}

export default GridList
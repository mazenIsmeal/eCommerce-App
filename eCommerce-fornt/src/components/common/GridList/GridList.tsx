import LottieHandler from '@components/feedback/LottieHandler/LottieHandler'
import {Col, Row} from 'react-bootstrap'

type GridListProps<T> = {
    records: T[],
    recordItem: (record:T) => React.ReactNode,
    emptyMessage: string
}

type HasId = {id?: number}

const GridList = <T extends HasId> ({records, recordItem, emptyMessage}: GridListProps<T>) => {
    const categoriesList = records.length > 0 ? records.map(record => (
    <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2" key={record.id}>
        {recordItem(record)}
    </Col>
)) : <LottieHandler type='empty' message={emptyMessage} />

  return (
    <Row>
        {categoriesList}
    </Row>
  )
}

export default GridList
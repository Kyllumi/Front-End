import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addCompany, removeCompany } from '../actions/actions'
import { useEffect, useState } from 'react'


const Job = ({ data }) => {
  const dispatch = useDispatch();
  const companyList = useSelector(state => state)
  const [isFavourite, setIsFavourite] = useState(companyList.includes(data));
  const [className, setClassName] = useState('bi bi-suit-heart-fill text-secondary');

  useEffect(() => {
    if (companyList.find(company => company.company_name === data.company_name)) {
      setClassName('bi bi-suit-heart-fill text-danger');
      setIsFavourite(true);
    } else {
      setClassName('bi bi-suit-heart-fill text-secondary');
      setIsFavourite(false);
    }
  }, [companyList, data]);

  const handleClick = () => {
    console.log(data);
    console.log(isFavourite);
    if (isFavourite) {
      setClassName('bi bi-suit-heart-fill text-secondary');
      dispatch(removeCompany(data));
    } else {
      setClassName('bi bi-suit-heart-fill text-danger');
      dispatch(addCompany(data));
    }
    setIsFavourite(!isFavourite);
  };

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={8}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={1}><i className={className} onClick={handleClick}></i>
      </Col>
    </Row>
  )
}

export default Job




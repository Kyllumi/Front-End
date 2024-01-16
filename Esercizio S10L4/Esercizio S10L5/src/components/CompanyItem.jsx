import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { removeCompany } from '../actions/actions'

export default function CompanyItem({ company }) {

    const dispatch = useDispatch()

    return (
        <>
            <ListGroup.Item className="d-flex justify-content-between align-items-center" ><Link to={`/${company.company_name}`} className="my-1 text-decoration-none text-dark"><strong>{company.company_name}</strong></Link>
                <i className="bi bi-trash" onClick={() => dispatch(removeCompany(company))}></i>
            </ListGroup.Item>

        </>
    )
}


//  as={Link} to={`/${company.company_name}`}
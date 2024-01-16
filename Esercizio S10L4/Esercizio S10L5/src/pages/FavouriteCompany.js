import React from 'react'
import { Container, ListGroup } from 'react-bootstrap'
import CompanyItem from '../components/CompanyItem'
import { useSelector } from 'react-redux'

export default function FavouriteCompany() {
    const companyList = useSelector(state => state)

    return (
        <Container>
            <ListGroup>
                {companyList.map((company) => (
                    <CompanyItem key={company._id} company={company} />
                ))}
            </ListGroup>
        </Container>
    )
}

import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import '../styles/pagination.scss';
function PaginationPage() {
    return (
        <Pagination>
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item active>{5}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Next />
        </Pagination>
    );
}

export default PaginationPage;
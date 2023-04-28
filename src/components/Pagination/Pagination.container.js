import React from "react";
import Pagination from './Pagination.component';

const PaginationContainer = (props) => {
    const containerProps = () => {
        const {
            onClickPreviousAndNextBtn,
            currentPage
        } = props;

        return {
            onClickPreviousAndNextBtn,
            currentPage
        };
    }

    return (
        <Pagination
           { ...containerProps() }
        />
    );  
};

export default PaginationContainer;
import React from "react";

import './Pagination.style.scss';

const Pagination = (props) => {
    const{
        onClickPreviousAndNextBtn,
        currentPage
    } = props;

    const renderButton = (buttonType) => {
        if (buttonType === 'previous') {
            return (
                <button
                    className="previousButton"
                    disabled={ currentPage === 0 ? true : false }
                    onClick={() => onClickPreviousAndNextBtn('previous')}
                >
                    Previous
                </button>
            );
        }

        return (
            <button
                className="nextButton"
                onClick={() => onClickPreviousAndNextBtn('next')}
            >
                Next
            </button>
        );
    }

    return (
        <ul className="Pagination">
            { renderButton('previous') }
            { renderButton('next') }
        </ul>
    );  
};

export default Pagination;
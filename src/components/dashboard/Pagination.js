import React from 'react';

import { PaginationContainer } from '../../styles/globalStyles';

const Pagination = (props) => {
    const pageLinks = [] //holds all the li tag for the page number

    for(let i = 1; i <=  props.pages + 1; i++){
        let active = props.currentPage === i ? 'active' : '';

        pageLinks.push(
        <li className={`pageTag ${active}`} 
            key={i} 
            onClick={() => props.nextPage(i)}>
            <a href="#">{i}</a>
        </li>)
    }

    return(
        <PaginationContainer>
            <div className = "row">
                <ul className="pagination">
                    { props.currentPage > 1 ? <li className={`pageTag`} onClick={() => props.nextPage(props.currentPage - 1)}><a href="#">Prev</a></li> : ''}
                    { pageLinks }
                    { props.currentPage < props.pages + 1 ? <li className={`pageTag`} onClick={() => props.nextPage(props.currentPage + 1)}><a href="#">Next</a></li> : ''}
                </ul>
            </div>
        </PaginationContainer>
    )
}

export default Pagination;
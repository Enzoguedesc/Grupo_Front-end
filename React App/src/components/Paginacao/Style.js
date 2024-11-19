import styled from "styled-components";

const PaginacaoContainer = styled.div`
.pagination {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
}

.pagination li {
    margin: 0 1px;
}

.pagination a {
    display: block;
    padding: 0.5em 1em;
    border: 1px solid #999;
    border-radius: 0.2em;
    text-decoration: none;
    background-color: white;
}

.pagination a[aria-current="page"] {
    background-color: var(--destaque);
    color: #fff;
}

`;

export { PaginacaoContainer };
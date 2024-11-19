import { PaginacaoContainer } from "./style";


const Paginacao = () => {
  return (
    <PaginacaoContainer className="paginacao">
      <div className="pagination">
        <ul className="pagination">
          <li>
            <a href="">
              <span aria-hidden="true">&laquo;</span><span className="visuallyhidden">previous set of pages</span>
            </a>
          </li>
          <li>
            <a href="" aria-current="page"><span className="visuallyhidden">page </span>1</a>
          </li>
          <li>
            <a href="">
              <span className="visuallyhidden">page </span>2
            </a>
          </li>
          <li>
            <a href=""><span className="visuallyhidden">page </span>3</a>
          </li>
          <li>
            <a href=""><span className="visuallyhidden">page </span>4</a>
          </li>
          <li>
            <a href="">
              <span className="visuallyhidden">next set of pages</span>
              <span aria-hidden="true">&raquo;</span></a>
          </li>
        </ul>
      </div>
    </PaginacaoContainer>
  );
}

export default Paginacao;
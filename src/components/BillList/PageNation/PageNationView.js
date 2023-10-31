import React from "react";

import {Nav, Button} from "../../../style/StyledPageNationSession";

const PageNationview = ({page, pageArray, addPage, setPage, billSize}) => {
  return (
    <>
      <Nav>
        <Button onClick={() => setPage(page - 10)} disabled={page < 11}>
          ◀
        </Button>
        {pageArray > 0 &&
          Array(pageArray)
            .fill()
            .map((_, i) => (
              <Button
                key={i + 1}
                onClick={() => setPage(i + 1 + addPage)}
                aria-current={page === i + 1 + addPage ? "page" : null}>
                {i + 1 + addPage}
              </Button>
            ))}
        <Button
          onClick={() => setPage(page + 10 <= billSize ? page + 10 : billSize)}
          disabled={Math.ceil(billSize / 10) === Math.ceil(page / 10)}>
          ▶
        </Button>
      </Nav>
    </>
  );
};

export default PageNationview;

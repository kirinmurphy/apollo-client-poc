import styled from 'styled-components';

export const SearchWrapper = styled.div`
padding:.5rem 0;
`;

export const SearchBarWrapper = styled.div`
input,
button {
  display:inline-block;
  height:2.5rem;
  line-height:2.5rem;
  font-size:1.3rem;
}

button {
  width: 3rem;
  line-height:2rem;
}

input[type="text"] {
  width:calc(100% - .5rem - 3rem);
  padding:0 .5rem;
  margin-right:.5rem;
  border:1px solid #aaa;
}
`;

export const CuisineCategoryWrapper = styled.div`
position:relative;

.category-list {
  position:absolute;
  top:0; right:0; left:0;
  background:var(--bgcolor-base);
  border:1px solid #ddd;
  border-width:0 1px 1px 1px;
  box-shadow:0 5px 10px #333;
}

.option {
  padding:.25rem .5rem;
  cursor:pointer;

  &:not(:last-of-type) {
    border-bottom:1px solid #eee;
  }

  &:hover {
    background:var(--bgcolor-highlight1-dark);
    color:var(--textcolor-inverted);
  }
}
`;

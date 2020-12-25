import styled from 'styled-components';

export const SourceDetailHeaderTheme = styled.div`
  display:flex; 
  margin-bottom:1rem;
  background:#eee;
  padding:1rem;

  header {
    margin-top:-.5rem;
    flex-grow: 1;
    
    > * {
      display:inline-block;
    }
    
    h2 {
      margin-right:.5rem;
    }
  }

  .map {
    height:250px;
    width: 400px;
    flex: 0 0 400px;
  }
`;

import styled from 'styled-components';

export const FullPageFormTheme = styled.div`
width:500px;
margin:0 auto;
padding: 1rem;

.field-error {
  color: var(--textcolor-error);
  font-size:var(--fontSize-small);
}

.form-error {
  margin-bottom:1rem;
  font-size:var(--fontSize-small);
  color:var(--textcolor-error);
}

button[type="submit"] { 
  width:100%;
  height:3rem;
}
`;

export const FormFieldTheme = styled.div`
  width:100%;
  margin-bottom:1rem;

  label,
  input { display:block; }
  
  input[type="text"],
  input[type="password"] {
    width:100%;
    padding:.5rem;
    border-radius:4px;
    font-size:20px;
    border:1px solid #ddd;
  }
`;

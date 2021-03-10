import styled from 'styled-components';

export const Wrapper = styled.div`
margin:0 auto; 
display:grid;
grid-template-columns:0.5fr 0.5fr 4fr 2.5fr 1fr;
grid-template-rows: 0.5 0.5fr 0.5fr 3fr 1fr;

`;

export const Icon = styled.div`
grid-area: 1 / 2 / 2 / 5;
display:flex;
flex-direction:row;
justify-content: flex-end;
align-items: flex-end;
margin-top:1%;
`;

export const Header = styled.div`
grid-area: 2 / 2 / 3 / 6;
justify-self: start;
display:grid;
grid-template-columns: 5fr 0.5fr 2.5fr 1fr;
width:100%;
height:auto;
`;
export const Thumbnails = styled.div`
grid-area: 3 / 2 / 4 / 3; 
align-self: center;
justify-self: center;
`;

// other components
export const Image = styled.div`
grid-area: 3 / 3 / 4 / 4;
align-self: center;
justify-self: center;
`;

export const Detail = styled.div`
grid-area: 3 / 4 / 4 / 5;
align-self: center;
justify-self: start;
`;

export const Info = styled.div`
grid-area: 4 / 2 / 5 / 5;
justify-self: center;
align-self: end;
`;

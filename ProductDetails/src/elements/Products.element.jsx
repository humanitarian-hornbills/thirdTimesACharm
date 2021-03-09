import styled from 'styled-components';

export const Wrapper = styled.div`
margin:0 auto; 
display:grid;
grid-template-columns:60% 30%;
grid-template-rows: 30px 60px auto 90px;
grid-template-areas:  "icon icon"
                      "hd hd"
                      "image detail"
                      "info info";
gap: 20px;
`;

export const Header = styled.div`
grid-area:hd;
justify-self: start;
display:grid;
grid-template-columns:5fr 1fr 1fr;
width:100%;
margin-left:9%;
height:auto;
`;
export const Icon = styled.div`
grid-area:icon;
display:flex;
flex-direction:row;
justify-content: flex-end;
align-items: flex-end
`;

// other components
export const Image = styled.div`
grid-area:image;
justify-self: center;
`;

export const Detail = styled.div`
grid-area:detail;
align-self: center;
justify-self: center;
`;

export const Info = styled.div`
grid-area:info;
justify-self: center;
`;

import styled from "styled-components";

const SwitcherWraper = styled.div`
  // position: absolute;
  display: flex;
  align-items: center;
  /* min-height: 24px; */
  left: 150px;
`;
const ButtonWraper = styled.div(({ active }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: active ? "34px" : "",
  border: "none",
  background: "none",
  borderRadius: "50%",
  boxShadow: "4px 4px 7px rgba(0, 0, 0, 0.2)",
  transition: "all 300ms",
}));
// const ButtonWraper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   /* min-width: 20px; */
//   /* margin-right: 10px; */

//   .active {
//     width: 111px;
//     background: none;
//     border-radius: 50%;
//     box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.2);
//     transition: all 300ms;
//     border: none;

//   }
// `;

const ButtonSwitcher = styled.button`
  width: 30px;
  cursor: pointer;
  transition: all 300ms;
  background-color: transparent;
  border: none;

  &:hover {
    /* width: 35px;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1); */
    transform: scale(1.3);
  }
`;
export { SwitcherWraper, ButtonWraper, ButtonSwitcher };

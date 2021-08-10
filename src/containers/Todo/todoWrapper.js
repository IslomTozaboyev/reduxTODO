import styled from "styled-components";

const TodoWrapper = styled.div`
  background-image: url(${(p) => p.colors.backgroundImage});
  background-size: cover !important;
  color: ${(p) => p.colors.color} !important;
  .bg__input {
    background: transparent;
    color: ${(p) => p.colors.color} !important;
  }
  .bg__input::placeholder {
    color: ${(p) => p.colors.color};
  }
  .listgroup {
    ::-webkit-scrollbar {
      width: 8px;
      border-radius: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
`;
export default TodoWrapper;

import { ListGroupItem } from "reactstrap";
import styled from "styled-components";

const ItemWrapper = styled(ListGroupItem)`
  color: ${(p) => p.colors.color};
  .completed {
    text-decoration: line-through;
  }
  .dropdown__bg {
    color: ${(p) => p.colors.color};
  }
  .dropdown__bg:hover {
    background: black !important;
    color: white;
  }
  & {
    background: transparent;
    border-bottom: 1px solid white;
  }
  &:hover {
    color: ${(p) => p.colors.hcolor} !important;
    background: transparent;
  }
`;
export default ItemWrapper;

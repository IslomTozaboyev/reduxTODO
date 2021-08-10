import {
  faArrowDown,
  faArrowUp,
  faBars,
  faEdit,
  faSave,
  faTimes,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Button, Input } from "reactstrap";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import ThemeContext from "../../themeContext";
import ItemWrapper from "./ItemWrapper";

const Item = ({
  value: { title, completed },
  index,
  deleteTask,
  editTask,
  up,
  down,
  toggleCompleted,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(title);

  const save = () => {
    setIsEdit(false);
    editTask(value, index);
  };

  const cancel = () => {
    setIsEdit(false);
    setValue(title);
  };
  onkeydown = (event) => {
    if (event.keyCode == 13) save();
  };
  const { colors } = useContext(ThemeContext);
  return (
    <ItemWrapper
      key={index}
      tag="a"
      href="#"
      action
      onDoubleClick={() => toggleCompleted(index)}
      className="d-flex align-items-center justify-content-between fw-bold itemBg"
      colors={colors}
    >
      {isEdit ? (
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="me-3 border-0"
        />
      ) : (
        <span className={`${(completed && "completed") || ""}`}>
          {index + 1}. {title}
        </span>
      )}

      {isEdit ? (
        <div className="d-flex align-items-center">
          <Button onClick={save} color="success" className="me-2">
            <FontAwesomeIcon icon={faSave} />{" "}
          </Button>
          <Button onClick={cancel} color="danger">
            <FontAwesomeIcon icon={faTimes} />{" "}
          </Button>
        </div>
      ) : (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle className="bg-dark" caret>
            <FontAwesomeIcon className="" icon={faBars} />
          </DropdownToggle>
          <DropdownMenu className="bg-primary text-white">
            <DropdownItem header className="text-light">
              Functions
            </DropdownItem>
            <DropdownItem
              className="fw-bold dropdown__bg"
              onClick={() => deleteTask(index)}
            >
              <FontAwesomeIcon className="text-danger me-1" icon={faTrash} />{" "}
              <span className="text-white">Delete</span>
            </DropdownItem>
            <DropdownItem
              className="fw-bold dropdown__bg"
              onClick={() => {
                setIsEdit(true);
              }}
            >
              <FontAwesomeIcon className="text-warning" icon={faEdit} />
              <span className="text-white ms-1">Edit</span>
            </DropdownItem>
            <DropdownItem
              className="fw-bold dropdown__bg"
              onClick={() => {
                up(index);
              }}
            >
              <FontAwesomeIcon
                className="text-white-50 me-2"
                icon={faArrowUp}
              />
              <span className="text-white">Up</span>
            </DropdownItem>
            <DropdownItem
              className="fw-bold dropdown__bg"
              onClick={() => {
                down(index);
              }}
            >
              <FontAwesomeIcon
                className="text-success me-2  text-white-50"
                icon={faArrowDown}
              />
              <span className="text-white">Down</span>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      )}
    </ItemWrapper>
  );
};

export default Item;

import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { AiOutlineFileSearch } from "react-icons/ai";
import { InputContainer, Input, Label } from "./Filter.styled";
import { getFilter } from "redux/selectors/contactsSelectors";
import { changeFilter } from "redux/slices/filterSlice";

const Filter = () => {
  const filterInputId = nanoid();

  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <>
      <InputContainer>
        <Input
          id={filterInputId}
          type="text"
          value={value}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
          placeholder="Dmitry"
        />
        <Label htmlFor={filterInputId}>
          <AiOutlineFileSearch size="30" />
          Find contacts by name
        </Label>
      </InputContainer>
    </>
  );
};

export default Filter;

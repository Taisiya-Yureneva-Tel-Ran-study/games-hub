import { Box, Input, InputGroup } from "@chakra-ui/react";
import { FC, useRef } from "react";
import { LuSearch } from "react-icons/lu";
import useGameQueryStore from "../state-manager/store";

const SearchBar: FC = () => {
    const inputElement = useRef<HTMLInputElement>(null);
    const {setSearchText} = useGameQueryStore();

    return (
      <Box as="form" onSubmit={(event) => {
        event.preventDefault();
        setSearchText(inputElement.current?.value || "")}} w={"100%"}>
        <InputGroup flex="1" startElement={<LuSearch />} >
            <Input ref={inputElement} placeholder="Search..."></Input>
        </InputGroup>
      </Box>
    )
}

export default SearchBar;
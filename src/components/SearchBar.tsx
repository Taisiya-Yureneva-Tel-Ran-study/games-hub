import { Box, Input, InputGroup } from "@chakra-ui/react";
import { FC, useRef } from "react";
import { LuSearch } from "react-icons/lu";

interface Props {
    onSubmitSearch: (text: string) => void;
}

const SearchBar: FC<Props> = ({onSubmitSearch}) => {
    const inputElement = useRef<HTMLInputElement>(null);

    return (
      <Box as="form" onSubmit={(event) => {
        event.preventDefault();
        onSubmitSearch(inputElement.current?.value || "")}} w={"100%"}>
        <InputGroup flex="1" startElement={<LuSearch />} >
            <Input ref={inputElement} placeholder="Search..."></Input>
        </InputGroup>
      </Box>
    )
}

export default SearchBar;
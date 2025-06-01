import { Button, Menu, Portal } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import MotionComponent from "./MotionComponent";
import useGenre from "../hooks/useGenre";

interface Props {
    onSelectGenre: (genre: string) => void;
    selectedGenre?: string | null;
}

const GenreSelector: React.FC<Props> = ({onSelectGenre, selectedGenre}) => {
    // TODO: use isLoading
  const { data, error, isLoading } = useGenre();
  const genres = data;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    error ? <Menu.Root > 
      <Menu.Trigger marginBottom={3} asChild>
        <Button variant="outline" size="sm">
          No Genres found
        </Button>
      </Menu.Trigger>
    </Menu.Root>

   :
    <Menu.Root  onExitComplete={() => setIsOpen(false)} >
      <Menu.Trigger marginBottom={3} asChild hideFrom={"md"}>
        <Button variant="outline" size="sm" onClick={() => setIsOpen(!isOpen)} >
          {selectedGenre ? selectedGenre : "Genre"}
          {isOpen ? 
            <FaChevronUp />
            : <FaChevronDown />}
        </Button>
      </Menu.Trigger>
      <Portal >
        <Menu.Positioner>
          <MotionComponent duration={0.5}>
          <Menu.Content>
            {genres.map((g) => <Menu.Item key={g.id} value={g.slug} onClick={() => {
                onSelectGenre(g.slug); 
                setIsOpen(false);}}>
              {g.name} 
            </Menu.Item>
            )}
         
          </Menu.Content>
          </MotionComponent>
        </Menu.Positioner>
      </Portal>
     </Menu.Root>
  )}

export default GenreSelector;

import { Button, Menu, Portal } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import MotionComponent from "./MotionComponent";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../state-manager/store";

const GenreSelector: React.FC = () => {
    // TODO: use isLoading
  const { data:genres, error, isLoading } = useGenre();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const genre = useGameQueryStore(s => s.genre);
  const setGenre = useGameQueryStore(s => s.setGenre);

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
      <Menu.Trigger marginBottom={3} asChild width="100%">
        <Button variant="outline" size="sm" onClick={() => setIsOpen(!isOpen)} >
          {genre ? genre : "Genre"}
          {isOpen ? 
            <FaChevronUp />
            : <FaChevronDown />}
        </Button>
      </Menu.Trigger>
      <Portal >
        <Menu.Positioner>
          <MotionComponent duration={0.5}>
          <Menu.Content>
            {genres?.map((g) => <Menu.Item key={g.id} value={g.slug} onClick={() => {
                setGenre(g.slug); 
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

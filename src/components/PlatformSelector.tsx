import { Button, Menu, Portal } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import usePlatform from "../hooks/usePlatform";
import { Platform } from "../model/Platform";
import MotionComponent from "./MotionComponent";

interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform?: Platform | null;
}

const PlatformSelector: React.FC<Props> = ({onSelectPlatform, selectedPlatform}) => {
    // TODO: use isLoading
  const { data, error, isLoading } = usePlatform();
  const platforms = data;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    error ? <Menu.Root > 
      <Menu.Trigger marginBottom={3} asChild>
        <Button variant="outline" size="sm">
          No Platforms found
        </Button>
      </Menu.Trigger>
    </Menu.Root>

   :
    <Menu.Root  onExitComplete={() => setIsOpen(false)} >
      <Menu.Trigger marginBottom={3} asChild>
        <Button variant="outline" size="sm" onClick={() => setIsOpen(!isOpen)} >
          {selectedPlatform ? selectedPlatform.name : "Platform"}
          {isOpen ? 
            <FaChevronUp />
            : <FaChevronDown />}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <MotionComponent duration={0.5}>
          <Menu.Content>
            {platforms.map((p) => <Menu.Item key={p.id} value={p.slug} onClick={() => {
                onSelectPlatform(p); 
                setIsOpen(false);}}>
              {p.name} 
            </Menu.Item>
            )}
         
          </Menu.Content>
          </MotionComponent>
        </Menu.Positioner>
      </Portal>
     </Menu.Root>
  )}

export default PlatformSelector;

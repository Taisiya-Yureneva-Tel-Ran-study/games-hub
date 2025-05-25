import { Button, Menu, Portal } from "@chakra-ui/react";
import React from "react";
import { FaChevronDown } from "react-icons/fa";
import usePlatform from "../hooks/usePlatform";

const PlatformSelector = () => {
  const { data, error, isLoading } = usePlatform();
  const platforms = data;

  return (
    <Menu.Root >
      <Menu.Trigger marginBottom={3} asChild>
        <Button variant="outline" size="sm">
          Platform
          <FaChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {platforms.map((platform) => {
                return <Menu.Item value="new-txt-a" key={platform.id}>
              {platform.name} 
            </Menu.Item>
            })}
         
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )}

export default PlatformSelector;

import { Button, Menu, Portal } from "@chakra-ui/react";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { orderByItems } from "../config/config";
import MotionComponent from "./MotionComponent";
import useGameQueryStore from "../state-manager/store";

const OrderSelector: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const {sortBy, setSorting} = useGameQueryStore();

    return <Menu.Root onExitComplete={() => setIsOpen(false)}>
        <Menu.Trigger asChild marginBottom={3} >
            <Button variant="outline" size="sm" onClick={() => setIsOpen(!isOpen)}>
                {sortBy ? orderByItems.items.find(item => item.value === sortBy)?.displayedName : "Order by"}
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </Button>
        </Menu.Trigger>

        <Portal>
            <Menu.Positioner>
              <MotionComponent duration={0.5}>
                <Menu.Content>
                    {orderByItems.items.map((item) => {
                        return <Menu.Item
                            key={item.value}
                            value={item.value}
                            onClick={() => {
                                setSorting(item.value);
                                setIsOpen(false);
                            }}
                        >{item.displayedName}</Menu.Item>
                    })}

                </Menu.Content>
              </MotionComponent>
            </Menu.Positioner>
        </Portal>
    </Menu.Root>;
}

export default OrderSelector;
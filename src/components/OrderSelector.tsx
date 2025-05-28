import { Button, Menu, Portal } from "@chakra-ui/react";
import { GameQuery } from "../model/GameQuery";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { orderByItems } from "../config/config";

interface Props {
    onSelectSort: (sort: string) => void;
    gameQuery: GameQuery;
}

const OrderSelector: React.FC<Props> = ({ onSelectSort, gameQuery }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return <Menu.Root >
        <Menu.Trigger asChild marginBottom={3} >
            <Button variant="outline" size="sm" onClick={() => setIsOpen(!isOpen)}>
                {gameQuery.sortBy ? orderByItems.items.find(item => item.value === gameQuery.sortBy)?.displayedName : "Order by"}
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </Button>
        </Menu.Trigger>

        <Portal>
            <Menu.Positioner>
                <Menu.Content>
                    {orderByItems.items.map((item) => {
                        return <Menu.Item
                            key={item.value}
                            value={item.value}
                            onClick={() => {
                                onSelectSort(item.value);
                                setIsOpen(false);
                            }}
                        >{item.displayedName}</Menu.Item>
                    })}

                </Menu.Content>
            </Menu.Positioner>
        </Portal>
    </Menu.Root>;
}

export default OrderSelector;
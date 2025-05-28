import { createListCollection } from "@chakra-ui/react";

export const orderByItems = createListCollection({
    items: [
        { displayedName: "Name ascending", value: "name" },
        { displayedName: "Name descending", value: "-name" },
        { displayedName: "Released on, ascending", value: "released" },
        { displayedName: "Released on, descending", value: "-released" },
        { displayedName: "Added on, ascending", value: "added" },
        { displayedName: "Added on, descending", value: "-added" },
        { displayedName: "Created on, ascending", value: "created" },
        { displayedName: "Created on, descending", value: "-created" },
        { displayedName: "Updated on, ascending", value: "updated" },
        { displayedName: "Updated on, descending", value: "-updated" },
        { displayedName: "Rating, ascending", value: "rating" },
        { displayedName: "Rating, descending", value: "-rating" },
        { displayedName: "Metacritic, ascending", value: "metacritic" },
        { displayedName: "Metacritic, descending", value: "-metacritic" }
    ]
});


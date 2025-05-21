import { Avatar, Button, List, Spinner } from "@chakra-ui/react";
import { ErrorBox } from "./ErrorBox";
import useGenre from "../hooks/useGenre";

const GenreList = () => {
    const { data, error, isLoading } = useGenre();
    const genre = data;

    return isLoading ? <Spinner size="xl" color="green.100" /> :
        error ? <ErrorBox error={error} /> :
            <List.Root overflowY={"auto"} variant={"plain"} padding={2} maxHeight={"80vh"}>
                {genre?.map(g => <List.Item key={g.id}>
                    <Avatar.Root size="xs">
                        <Avatar.Image src={g.image_background} alt={g.name}>
                        </Avatar.Image> 
                    </Avatar.Root>
                    <Button variant="ghost">
                        {g.name}
                    </Button>
                </List.Item>
                )}
            </List.Root>
}

export default GenreList;
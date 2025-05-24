import { Avatar, Button, List, Spinner } from "@chakra-ui/react";
import { ErrorBox } from "./ErrorBox";
import useGenre from "../hooks/useGenre";

interface Props {
    onSelectGenre: (genreSLug: string) => void;
    selectedGenre: string | null;
}

const GenreList: React.FC<Props> = ({onSelectGenre, selectedGenre}) => {
    const { data, error, isLoading } = useGenre();
    const genre = data;

    function changeSelectedGenre(genreSlug: string) {
        let vari = {colorPalette: "gray", fontWeight: "normal"};
        if (genreSlug === selectedGenre) {
            vari = {colorPalette: "green", fontWeight: "bold"};
        }
        return vari;
    }

    return isLoading ? <Spinner size="xl" color="green.100" /> :
        error ? <ErrorBox error={error} /> :
            <List.Root overflowY={"auto"} variant={"plain"} padding={2} maxHeight={"80vh"}>
                {genre?.map(g => <List.Item key={g.id}>
                    <Avatar.Root size="xs">
                        <Avatar.Image src={g.image_background} alt={g.name}>
                        </Avatar.Image> 
                    </Avatar.Root>
                    <Button 
                        onClick={() => onSelectGenre(g.slug)}
                        {...changeSelectedGenre(g.slug)}
                        variant="ghost" >
                        {g.name}
                    </Button>
                </List.Item>
                )}
            </List.Root>
}

export default GenreList;
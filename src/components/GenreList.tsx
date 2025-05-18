import { Text } from "@chakra-ui/react";
import { ErrorBox } from "./ErrorBox";
import { Genre } from "../model/Genre";
import useData from "../hooks/useData";

const GenreList = () => {
    const {data, error} = useData<Genre>('/genres');
    const genre = data;

    return error ? <ErrorBox error={error} /> :
        <ul>
                {genre?.map(g => <Text key={g.id}>{g.name} </Text>

            )}
        </ul> 
}

export default GenreList;
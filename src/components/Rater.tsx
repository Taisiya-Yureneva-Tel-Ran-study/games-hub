import { HStack } from "@chakra-ui/react";
import React, { useMemo } from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

interface Props {
    starsCount?: number;
    maxRate: number;
    rate: number;
}

const Rater: React.FC<Props> = ({ maxRate, rate, starsCount = 5 }) => {
    const starNominal = maxRate / starsCount;
    const lowerBound = 0.25 * starNominal;
    const upperBound = 0.75 * starNominal;

    function isFullStar(value: number) : boolean {
        return value <= rate || value - rate < lowerBound;
    }
    function isHalfStar(value: number) : boolean {
        return value - rate > lowerBound && value - rate < upperBound;
    }

    function calculateStar(value: number) {
        return isFullStar(value) ? <FaStar key={value} color="gold" /> :
               isHalfStar(value) ? <FaStarHalfAlt key={value} color="gold" /> : 
                                   <FaRegStar key={value} color="gold" />;
    }

    return (
        <HStack  >
            {Array.from({ length: starsCount }, (_, index) => {
                const value = (index + 1) * starNominal;
                return useMemo(() => calculateStar(value), [maxRate, rate, starsCount]);
            })}
        </HStack>
    );
};


export default Rater;
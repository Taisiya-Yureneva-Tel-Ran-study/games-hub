import { HStack } from "@chakra-ui/react";
import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

interface Props {
    starsCount?: number;
    maxRate: number;
    rate: number;
}

const Rater: React.FC<Props> = ({maxRate, rate, starsCount = 5}) => {
    const starValue = maxRate / starsCount;
    const lowerBound = 0.25*starValue;
    const upperBound = 0.75*starValue;

    console.log(lowerBound, upperBound, starValue);

    function calculateStars(value: number) {
        console.log(value);
        if (value <= rate || value - rate < lowerBound) {
            return <FaStar key={value} color="gold" />
        } else if (value - rate > lowerBound && value - rate < upperBound) {
            return <FaStarHalfAlt key={value}  color="gold" />
        } else {
            return <FaRegStar key={value} color="gold" />
        }
        
    }
    console.log(rate, maxRate, starsCount);    
        return (
            <HStack  >
                {Array.from({length: starsCount}, (_, index) => {
                    const value = (index+1) * starValue;
                    return calculateStars(value);
                })}
            </HStack>
        );
    };


export default Rater;
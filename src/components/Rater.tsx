import { HStack } from "@chakra-ui/react";
import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Predicate from "./utils/Predicate";

interface Props {
    starsCount?: number;
    maxRate: number;
    rate: number;
}

const Rater: React.FC<Props> = ({ maxRate, rate, starsCount = 5 }) => {
    const starNominal = maxRate / starsCount;
    const lowerBound = 0.25 * starNominal;
    const upperBound = 0.75 * starNominal;

    class FullStarPredicate implements Predicate<number> {
        test(value: number): boolean {
            return value <= rate || value - rate < lowerBound;
        }
    }
    class HalfStarPredicate implements Predicate<number> {
        test(value: number): boolean {
            return value - rate > lowerBound && value - rate < upperBound;
        }
    }

    function calculateStar(value: number) {
        const fullStarPredicate = new FullStarPredicate();
        const halfStarPredicate = new HalfStarPredicate();
        return fullStarPredicate.test(value) ? <FaStar key={value} color="gold" /> :
               halfStarPredicate.test(value) ? <FaStarHalfAlt key={value} color="gold" /> : 
                                               <FaRegStar key={value} color="gold" />;
    }

    return (
        <HStack  >
            {Array.from({ length: starsCount }, (_, index) => {
                const value = (index + 1) * starNominal;
                return calculateStar(value);
            })}
        </HStack>
    );
};


export default Rater;
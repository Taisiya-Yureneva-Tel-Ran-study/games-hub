import { EmptyState, VStack } from "@chakra-ui/react";
import React from "react";
import { HiColorSwatch } from "react-icons/hi";

interface ErrorBoxProps {
    error: string;
}

export const ErrorBox: React.FC<ErrorBoxProps> = ({error}) => {
    return (<EmptyState.Root>
                <EmptyState.Indicator>
                    <HiColorSwatch />
                </EmptyState.Indicator>
                <VStack textAlign="center">
              <EmptyState.Title>{error}</EmptyState.Title>
            </VStack>
            </EmptyState.Root>)
}
import { Box, BoxProps } from "@chakra-ui/react";

interface SectionProps extends BoxProps {
    children: React.ReactNode;
    boxProps?: BoxProps;
}

const Section = ({children, boxProps, ...props} : SectionProps) => {
    return (
        <Box as="section" {...props}>
            <Box
                {...boxProps}
            >
                {children}
            </Box>
        </Box>
    )
};

export default Section;
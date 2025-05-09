import { Button, ButtonProps} from "@chakra-ui/react";

interface FITButtonProps extends ButtonProps {
    text: string;
    color: string;
    bgColor: string;
}

export default function FITButton({ text, color, bgColor, ...FITbtnProps } : FITButtonProps )   {
    return (
        <Button
            width="100%"
            padding="7%"
            textStyle="universal.h6"
            backgroundColor={bgColor}
            color={color}
            {...FITbtnProps}
        >
            {text}
        </Button>
    )
}
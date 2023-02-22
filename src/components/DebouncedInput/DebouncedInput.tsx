import React, {DetailedHTMLProps, InputHTMLAttributes, ReactNode, useState} from 'react'
import CustomInputText from '../CustomInputText/CustomInputText'



type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement>


export type SuperDebouncedInputPropsType = Omit<DefaultInputPropsType, 'type'> & {

    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: ReactNode
    spanClassName?: string
}
    & {
    onDebouncedChange?: (value: string) => void
}

export const DebouncedInput: React.FC<SuperDebouncedInputPropsType> = (
    {
        onChangeText,
        onDebouncedChange,


        ...restProps
    }
) => {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)

    const onChangeTextCallback = (value: string) => {
        onChangeText?.(value)
        if (onDebouncedChange) {

            clearTimeout(timerId)
           let timerId2 =  setTimeout(()=>{
               onDebouncedChange(value)
            }, 1500)
            setTimerId(+timerId2)
        }
    }

    return (
        <CustomInputText onChangeText={onChangeTextCallback} />
    )
}


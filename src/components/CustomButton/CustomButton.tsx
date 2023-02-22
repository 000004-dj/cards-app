import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './CustomButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
}

export const CustomButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className,
        disabled,
        ...restProps
    }
) => {
    const finalClassName = s.button
         + (disabled ? ' ' + s.disabled : '')
        + (xType === 'red'? ' ' + s.red : '')
        + (xType === 'secondary' ? ' ' + s.secondary : ' ' + s.default)
        // + (className ? ' ' + s.className : '')

    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps}
        >Click</button>
    )
}


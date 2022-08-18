import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import style from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
    //callback:()=>void
}

export const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        red, className, name,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName = `${red ? style.red : style.defaultTwo} ${className}`

    return (
        /*   <button
               className={finalClassName}
               {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
           />*/
        <button
            className={finalClassName}
            // onClick={restProps.callback}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        ><span>{restProps.children}</span></button>
    )
}



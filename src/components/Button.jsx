import React from 'react'
import { ButtonStyle } from './styles'

export function Button (props){
    const { operation, double, triple } = props
    let classes = 'button '
    classes += operation ? 'operation' : ''
    classes += double ? 'double' : ''
    classes += triple ? 'triple' : ''
    
    return (
        <ButtonStyle 
            onClick={e => props.click && props.click(props.label)}
            className={classes}>
            {props.label}
        </ButtonStyle>
    )
}
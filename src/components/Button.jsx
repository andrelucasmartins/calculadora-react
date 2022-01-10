import React from 'react'
import { Button } from './styles'

// const transaction  = (props) => {
//     const { operation, double, triple } = props
//     operation : 'operation';
//     double : 'double'
//     triple:  'triple'
// }

export default props => {
    const { operation, double, triple } = props
    let classes = 'button '
    classes += operation ? 'operation' : ''
    classes += double ? 'double' : ''
    classes += triple ? 'triple' : ''
    
    return (
        <Button 
            onClick={e => props.click && props.click(props.label)}
            className={classes}>
            {props.label}
        </Button>
    )
}
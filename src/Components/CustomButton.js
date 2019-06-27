import React from 'react'

export class CustomButton extends React.Component {
    render(props){
        return(
            <button onClick = {props.onSimpleClick}>Leave this page</button>
        )
    }
}
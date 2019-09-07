import React from "react";
import {storiesOf} from "@storybook/react"
import {Button,ButtonGroup} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import markdownNotes from "../markdowns/buttons.markdown.md";

const BasicButtons = ()=>{
    return(
        <div style={{padding:"20px"}}>
            <h3>Basic Buttons</h3>
            <Button color="primary">primary</Button>{' '}
            <Button color="secondary">secondary</Button>{' '}
            <Button color="success">success</Button>{' '}
            <Button color="info">info</Button>{' '}
            <Button color="warning">warning</Button>{' '}
            <Button color="danger">danger</Button>{' '}
            <Button color="link">link</Button>
        </div>
    )
}
const OutlineButtons =()=>{
    return(
        <div style={{padding:"20px",clear:"both"}}>
            <h3>Outline Buttons</h3>
            <Button outline color="primary">primary</Button>{' '}
            <Button outline color="secondary">secondary</Button>{' '}
            <Button outline color="success">success</Button>{' '}
            <Button outline color="info">info</Button>{' '}
            <Button outline color="warning">warning</Button>{' '}
            <Button outline color="danger">danger</Button>
        </div>
    )
}

const ButtonSizes =()=>{
    return(
        <div style={{padding:"20px"}}>
            <div style={{width:"50%",float:"left"}}>
            <h3>Large Buttons</h3>
            <ButtonGroup size="lg">
                <Button color="primary">Left</Button>
                <Button>Middle</Button>
                <Button color="danger">Right</Button>
            </ButtonGroup>
            </div>
            <div style={{width:"50%",float:"left"}}>
            <h3>Small Buttons </h3>
            <ButtonGroup size="sm">
                <Button color="primary">Left</Button>
                <Button>Middle</Button>
                <Button color="danger">Right</Button>
            </ButtonGroup>
            </div>
        </div>
    )
}

const ButtonGroups=()=>{
    return(
        <div style={{padding:"20px"}}>
            <div style={{width:"50%",float:"left"}}>
            <h3>Horizontal Button Groups</h3>
            <ButtonGroup>
                <Button color="primary">Left</Button>
                <Button>Middle</Button>
                <Button color="danger">Right</Button>
            </ButtonGroup>
            </div>
            <div style={{width:"50%",float:"left"}}>
            <h3>Vertical Button Groups</h3>
            <ButtonGroup vertical>
                <Button color="primary">Left</Button>
                <Button>Middle</Button>
                <Button color="danger">Right</Button>
            </ButtonGroup>
            </div>
        </div>
    )
}

storiesOf("UI Components",module)
.add("Buttons",()=><React.Fragment><BasicButtons /> <ButtonSizes /> <OutlineButtons /> <ButtonGroups/></React.Fragment>,{
    notes:{markdown:markdownNotes}
})
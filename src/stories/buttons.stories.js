import React from "react";
import {storiesOf} from "@storybook/react"
import {Button,ButtonGroup} from "reactstrap";
import {Container} from "./stories.helper";
import "bootstrap/dist/css/bootstrap.min.css";
import markdownNotes from "../markdowns/buttons.markdown.md";

const BasicButtons = ()=>{
    return(
        <Container title="Basic Buttons">
            <Button color="primary">primary</Button>{' '}
            <Button color="secondary">secondary</Button>{' '}
            <Button color="success">success</Button>{' '}
            <Button color="info">info</Button>{' '}
            <Button color="warning">warning</Button>{' '}
            <Button color="danger">danger</Button>{' '}
            <Button color="link">link</Button>
        </Container>
    )
}
const OutlineButtons =()=>{
    return(
        <Container title="Outline Buttons">
            <Button outline color="primary">primary</Button>{' '}
            <Button outline color="secondary">secondary</Button>{' '}
            <Button outline color="success">success</Button>{' '}
            <Button outline color="info">info</Button>{' '}
            <Button outline color="warning">warning</Button>{' '}
            <Button outline color="danger">danger</Button>
        </Container>
    )
}

const ButtonSizes =()=>{
    return(
        <Container>
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
        </Container>
    )
}

const ButtonGroups=()=>{
    return(
        <Container>
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
        </Container>
    )
}

const storyFunction = () =>{
    return(
        <React.Fragment>
            <BasicButtons />
            <ButtonSizes /> 
            <OutlineButtons /> 
            <ButtonGroups/>
        </React.Fragment>
    )
}
storiesOf("UI Components",module)
.add("Buttons",storyFunction,{
    notes:{markdown:markdownNotes}
})
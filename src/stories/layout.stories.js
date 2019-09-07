import React from "react";
import {storiesOf} from "@storybook/react";
import {Container,Row,Col} from "reactstrap";
import markdownNotes from "../markdowns/layout.markdown.md";

const SingleColumnGrid = () =>{
    return(
        <div style={{padding:"20px"}}>
            <h3>Single column</h3>
            <Row>
                <Col>
                    <div style={{background:"#ddd",padding:"10px",border:"1px solid #ddd"}}>
                    Column
                    </div>
                </Col>
            </Row>
        </div>
    )
}

const MultiColumnGrid = () =>{
    return(
        <div style={{padding:"20px"}}>
            <h3>Multi column</h3>
            <Row>
                <Col>
                    <div style={{background:"#ddd",padding:"10px",border:"1px solid #ddd"}}>
                    Column
                    </div>
                </Col>
                <Col>
                    <div style={{background:"#ddd",padding:"10px",border:"1px solid #ddd"}}>
                    Column
                    </div>
                </Col>
                <Col>
                    <div style={{background:"#ddd",padding:"10px",border:"1px solid #ddd"}}>
                    Column
                    </div>
                </Col>
            </Row>
        </div>
    )
}

const VaraibleColumnWidthGrid = () =>{
    return(
        <div style={{padding:"20px"}}>
            <h3> Varaible Column Width Grid</h3>
            <Row>
                <Col>
                    <div style={{background:"#ddd",padding:"10px",border:"1px solid #ddd"}}>
                    Column
                    </div>
                </Col>
                <Col xs="auto">
                    <div style={{background:"#ddd",padding:"10px",border:"1px solid #ddd"}}>
                    Varaible Column Width
                    </div>
                </Col>
                <Col>
                    <div style={{background:"#ddd",padding:"10px",border:"1px solid #ddd"}}>
                    Column
                    </div>
                </Col>
            </Row>
        </div>
    )
}

const ResponsiveColumnGrid = () =>{
    return(
        <div style={{padding:"20px"}}>
            <h3> Different column pattern based on the screen size</h3>
            <Row>
                <Col xs="4" sm="6" md="3" lg="3">
                    <div style={{background:"#ddd",padding:"10px",border:"1px solid #ddd"}}>
                    Column 1
                    </div>
                </Col>
                <Col xs="4" sm="3" md="6" lg="3">
                    <div style={{background:"#ddd",padding:"10px",border:"1px solid #ddd"}}>
                    Column 2
                    </div>
                </Col>
                <Col xs="4" sm="3" md="3" lg="6">
                    <div style={{background:"#ddd",padding:"10px",border:"1px solid #ddd"}}>
                    Column 3
                    </div>
                </Col>
            </Row>
        </div>
    )
}

const NonFluidContainer = () =>{
    return(
        <div style={{padding:"20px"}}>
            <h3>Non Fluid Container</h3>
            <Container>
                <Row>
                    <Col>
                        <div style={{background:"#ddd",padding:"10px",border:"1px solid #ddd"}}>
                        Column
                        </div>
                    </Col>
                    <Col>
                        <div style={{background:"#ddd",padding:"10px",border:"1px solid #ddd"}}>
                        Column
                        </div>
                    </Col>
                    <Col>
                        <div style={{background:"#ddd",padding:"10px",border:"1px solid #ddd"}}>
                        Column
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

const FluidContainer = () =>{
    return(
        <div style={{padding:"20px"}}>
            <h3>Fluid Container</h3>
            <Container fluid>
                <Row>
                    <Col>
                        <div style={{background:"#ddd",padding:"10px",border:"1px solid #ddd"}}>
                        Column
                        </div>
                    </Col>
                    <Col>
                        <div style={{background:"#ddd",padding:"10px",border:"1px solid #ddd"}}>
                        Column
                        </div>
                    </Col>
                    <Col>
                        <div style={{background:"#ddd",padding:"10px",border:"1px solid #ddd"}}>
                        Column
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

storiesOf("Layout",module)
.add("Grids",()=><React.Fragment><SingleColumnGrid /> <MultiColumnGrid /> <VaraibleColumnWidthGrid /> <ResponsiveColumnGrid /><NonFluidContainer /> <FluidContainer /> </React.Fragment>,{
    notes:{markdown:markdownNotes}
})
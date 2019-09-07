import React from "react";
import {storiesOf} from "@storybook/react";
import {Container,Row,Col} from "reactstrap";
import {Container as PageContainer} from "./stories.helper";
import markdownNotes from "../markdowns/layout.markdown.md";

const SingleColumnGrid = () =>{
    return(
        <PageContainer title="Single column">
            <Row>
                <Col>
                    <div style={{background:"#ddd",padding:"10px",border:"1px solid #ddd"}}>
                    Column
                    </div>
                </Col>
            </Row>
        </PageContainer>
    )
}

const MultiColumnGrid = () =>{
    return(
        <PageContainer title="Multi column">
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
        </PageContainer>
    )
}

const VaraibleColumnWidthGrid = () =>{
    return(
        <PageContainer title="Varaible Column Width Grid">
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
        </PageContainer>
    )
}

const NonFluidContainer = () =>{
    return(
        <PageContainer title="Non Fluid Container">
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
        </PageContainer>
    )
}

const FluidContainer = () =>{
    return(
        <PageContainer title="Fluid Container">
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
        </PageContainer>
    )
}

const ResponsiveLayout = () =>{
    return(
        <PageContainer title="Responsive Layout">
            <Row>
                <Col xs="12" md="12" >
                    <div style={{background:"#ddd",padding:"10px",border:"1px solid #ddd",margin:"5px 0"}}>
                    Header
                    </div>
                </Col>
                <Col xs="12" md="6" >
                    <div style={{background:"#ddd",padding:"10px",border:"1px solid #ddd",margin:"5px 0"}}>
                    Column 1
                    </div>
                </Col>
                <Col xs="12" md="6" >
                    <div style={{background:"#ddd",padding:"10px",border:"1px solid #ddd",margin:"5px 0"}}>
                    Column 2
                    </div>
                </Col>
                <Col xs="12" md="12" >
                    <div style={{background:"#ddd",padding:"10px",border:"1px solid #ddd",margin:"5px 0"}}>
                    Footer
                    </div>
                </Col>
            </Row>
        </PageContainer>
    )
}

const storyFunction=()=>{
    return(
        <React.Fragment>
            <SingleColumnGrid /> 
            <MultiColumnGrid /> 
            <VaraibleColumnWidthGrid /> 
            <NonFluidContainer /> 
            <FluidContainer /> 
        </React.Fragment>
    )
}

storiesOf("Layout",module)
.add("Grids",storyFunction,{
    notes:{markdown:markdownNotes}
})
.addParameters({ viewport: { defaultViewport: 'ipad' }})
.add("iPad Layout",()=><ResponsiveLayout />)
.addParameters({ viewport: { defaultViewport: 'iphone5' }})
.add("iPhone 5 Layout",()=><ResponsiveLayout />)
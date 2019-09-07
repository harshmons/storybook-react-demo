import React from "react";

const containerStyle={
    padding:"20px",
    clear:"both"
}
export const Container = ({title,children}) =>{
    return(
        <div style={containerStyle}>
            <h3>{title}</h3>
            {children}
        </div>
    )
}


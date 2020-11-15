1. React.CSSProperties  样式对象

        import React from "react"
        const buttonStyles: React.CSSProperties = {
            backgroundColor: "#5aac44",
            borderRadius: "3px",
            border: "none",
            boxShadow: "none"
        }

2. 或者使用style-components

        import styled from "styled-components"
        
        const Button = styled.button`
            background-color: #5aac44;
            border-radius: 3px;
            border: none;
            box-shadow: none;
        `
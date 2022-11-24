import PropTypes from "prop-types";
import styled from "styled-components";

import { ReactComponent as CrossIcon} from "../assets/icons/cross.svg";

const StyledAlert = styled.div`
    width: 1440px;
    height: 64px;
    margin: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px 32px;
    background: #605DEC;
    font-family: 'Nunito Sans';
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    background: ${(props) => {
        switch (props.color) {
            case "primary":
                return "#605DEC";
            case "error":
                return "#EB5757";
            case "warning":
                return "#FFD12F";
        }
    }};   
    color: ${(props) => {
        switch (props.color) {
            case "primary":
                return "#F6F6FE";
            case "error":
                return "#FAFAFA";
            case "warning":
                return "#1513A0";
        }
    }};   
`;

const Button = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`;

const Alert = ({children, color, onClose}) => {

    return ( <StyledAlert color={color}>{children}<Button onClick={onClose}><CrossIcon /></Button></StyledAlert>)
};



Alert.propTypes = {
    color: PropTypes.oneOf(["primary", "error", "warning"]),
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func,
};

export default Alert;
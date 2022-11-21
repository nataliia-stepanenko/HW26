import PropTypes from "prop-types";
import styled from "styled-components";

import { ReactComponent as CrossIcon} from "../assets/icons/cross.svg";

const StyledPrimaryAlert = styled.div`
    width: 1440px;
    height: 64px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px 32px;
    gap: 10px;
    background: #605DEC;
    font-family: 'Nunito Sans';
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    color: #F6F6FE;
`;

const StyledErrorAlert = styled(StyledPrimaryAlert)`
    background: #EB5757;
`;

const StyledWarningAlert = styled(StyledPrimaryAlert)`
    background: #FFD12F;
    color: #1513A0;
`;

const Button = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`;


const Alert = ({children, color, onClose}) => {

        if (color === "primary") {
            return (
                <StyledPrimaryAlert>{children}<Button onClick={onClose}><CrossIcon /></Button></StyledPrimaryAlert>
            )}
        if (color === "error") {
                return (
                    <StyledErrorAlert>{children}<Button onClick={onClose}><CrossIcon /></Button></StyledErrorAlert>
                ) 
            }
    return ( <StyledWarningAlert>{children}<Button onClick={onClose}><CrossIcon /></Button></StyledWarningAlert>)
};



Alert.propTypes = {
    color: PropTypes.oneOf(["primary", "error", "warning"]),
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func,
};

export default Alert;
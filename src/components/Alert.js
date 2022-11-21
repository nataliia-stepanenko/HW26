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


const Alert = ({children, color}) => {

        if (color === "primary") {
            return (
                <StyledPrimaryAlert color>{children}<CrossIcon /></StyledPrimaryAlert>
            )}
        if (color === "error") {
                return (
                    <StyledErrorAlert color>{children}<CrossIcon /></StyledErrorAlert>
                ) 
            }
        return <StyledWarningAlert color>{children}<CrossIcon /></StyledWarningAlert>
};



Alert.propTypes = {
    color: PropTypes.oneOf(["primary", "error", "warning"]),
    children: PropTypes.node.isRequired
};

export default Alert;
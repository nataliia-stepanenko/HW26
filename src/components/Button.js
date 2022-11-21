import PropTypes from "prop-types";
import styled from "styled-components";

const StyledPrimaryButton = styled.button`
    border-radius: 4px;
    font-family: 'Nunito Sans';
    font-size: 16px;
    color: #FAFAFA;
    border: 1px solid transparent;
    border-radius: 4px;
    background: #605DEC;
    padding: 12px 20px;
    height: 48px;
    width: 76px;
    margin: 8px;
    cursor: pointer;

    :hover {
        background: #1513A0;
    }

    :disabled {
        border-color: #7C8DB0;
        background: rgba(203, 212, 230, 0.3);
    }
`;

const StyledSecondaryButton = styled(StyledPrimaryButton)`
    background: white;
    border-color: #605DEC;

    :hover {
        background: #E9E8FC;
    }

    :disabled {
        border-color: #7C8DB0;
        background: white;
    }
`;

const StyledPrimaryLargeButton = styled(StyledPrimaryButton)`
    width: 81px;
    font-size: 18px;
`;
const StyledSecondaryLargeButton = styled(StyledSecondaryButton)`
    width: 81px;
    font-size: 18px;
`;

const StyledPrimarySmallButton = styled(StyledPrimaryButton)`
    padding: 8px 16px;
    width: 68px;
    height: 40px;
`;
const StyledSecondarySmallButton = styled(StyledSecondaryButton)`
    padding: 8px 16px;
    width: 68px;
    height: 40px;
`;



const Button = ({color, size, disabled, children, onClick}) => {
    const buttonProps = {
        color,
        size,
        disabled,
        onClick
    };

    if (color === "secondary") {
        if (size === "large") {
            return <StyledSecondaryLargeButton {...buttonProps}>{children}</StyledSecondaryLargeButton>
        } else if (size === "small") {
            return <StyledSecondarySmallButton {...buttonProps}>{children}</StyledSecondarySmallButton>
        }
        return <StyledSecondaryButton {...buttonProps}>{children}</StyledSecondaryButton>
    }

    if (size === "large") {
        return <StyledPrimaryLargeButton {...buttonProps}>{children}</StyledPrimaryLargeButton>
    } else if (size === "small") {
        return <StyledPrimarySmallButton {...buttonProps}>{children}</StyledPrimarySmallButton>
    }
    return <StyledPrimaryButton {...buttonProps}>{children}</StyledPrimaryButton>
}

Button.propTypes = {
    onClick: PropTypes.func,
    color: PropTypes.oneOf(["primary", "secondary"]),
    size: PropTypes.oneOf(["large", "small"]),
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired
};

Button.defaultProps = {
    color: "primary",
    disabled: false,
};


export default Button;
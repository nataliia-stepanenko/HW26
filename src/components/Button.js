import PropTypes from "prop-types";
import styled from "styled-components";

const StyledPrimaryButton = styled.button`
    border-radius: 4px;
    font-family: 'Nunito Sans';
    color: #FAFAFA;
    border: 1px solid transparent;
    background: #605DEC;
    margin: 8px;
    cursor: pointer;
    padding: ${(props) => {
	    switch (props.size) {
            case "large":
                return "20px 11.5px";
            case "medium":
                return "20px 13px";
            case "small":
                return "16px 9px";
	    }
	  }};
    font-size: ${(props) => {
        switch (props.size) {
            case "large":
                return "18px";
            case "medium":
                return "16px";
            case "small":
                return "16px";
        }
    }};

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


const Button = ({color, size, disabled, children, onClick}) => {
    const buttonProps = {
        color,
        size,
        disabled,
        onClick
    };

    if (color === "secondary") {
        return <StyledSecondaryButton {...buttonProps}>{children}</StyledSecondaryButton>
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
    size: "small",
};


export default Button;
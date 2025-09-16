import cx from 'classnames'
import PropTypes from 'prop-types' // ES6


const Button = (props) => {
    const { children, primary, secondary, success, warning, danger, rounded, outline } = props;
    const baseClass = "flex items-center px-8 py-3 border"
    return <button className = {cx(baseClass, {
        // color variants pick one
        "bg-blue-500 border-blue-500 text-white": primary,
        "bg-gray-900 border-gray-900 text-white": secondary,
        "bg-green-500 border-green-500 text-white": success,
        "bg-yellow-400 border-yellow-400 text-white": warning,
        "bg-red-500 border-red-500 text-white": danger,
        // outline and rounded additional style props
        "rounded-full": rounded,
        "bg-white": outline,
        "text-blue-500": outline && primary,
        "text-gray-900": outline && secondary,
        "text-green-500": outline && success,
        "text-yellow-400": outline && warning,
        "text-red-600": outline && danger,
    })}>{children}</button>
}

Button.propTypes = {
    // This is validating props by type and this is the most common
    // reason for using the library
    // TypeScript is also used more recently and a lot more powerful and easier than the proptypes
    // primary : PropTypes.bool,
    customPropValidation:({primary,secondary,success,warning,danger}) => {
        const count = 
        Number(!!primary) 
        + Number(!!secondary) 
        + Number(!!success) 
        + Number(!!warning) 
        + Number(!!danger)

        console.log(count);
        if (count > 1) {
            return new Error("OMG you fool, Only one of primary, secondary, success, warning, danger can be TRUE!")
        }
    }
}

export default Button
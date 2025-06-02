import PropTypes from "prop-types";

const Greeting = ({ name, age, isStudent }) => (
    <>
        <h1>Hello, {name}</h1>
        <p>Age: {age}</p>
        <p>{isStudent ? "You are Student" : "You are not a Student"}</p>
    </>
)

Greeting.prototype = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isStudent: PropTypes.bool,
};

Greeting.defaultProps = {
    isStudent: false,
};

export default Greeting;

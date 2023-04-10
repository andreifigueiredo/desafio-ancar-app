import PropTypes from "prop-types";

const Input = (props) => {
  return (
    <div>
      {props.label && (
        <label htmlFor={props.id} className="sr-only">
          {props.label}
        </label>
      )}
      <input
        {...props}
        className="appearance-none relative block w-full px-3 py-2 text-sm border border-gray-300 rounded-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 placeholder-gray-500 text-gray-900"
      />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
};

export default Input;

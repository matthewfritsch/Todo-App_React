import PropTypes from 'prop-types'

const Button = ({color, text}) => {

    const addButtonClick = () => {
        console.log("Click")
    } 

  return (
    <button 
    className='btn' 
    style={{backgroundColor: color}}
    onClick={addButtonClick}>
        {text}
    </button>
  )
}

Button.defaultProps = {
    color: 'steelblue',
    text: 'None'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Button
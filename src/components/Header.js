import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {

    const addButtonClick = () => {
        console.log("Click")
    } 


  return (
    <div>
        <header className = 'header'>
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
        </header>
    </div>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes= {
    title: PropTypes.string.isRequired,
}

// NOTE: CSS in JS
// const headingStyle = {
//     color: 'red', 
//     backgroundColor : 'black'
// }

export default Header
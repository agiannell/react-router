import {Link, withRouter} from 'react-router-dom'

const Header = (props) => {
    function back() {
        props.history.goBack()
    }
    // function route(path) {
    //     props.history.push(path)
    // }
    return (
        <div>Header
            <nav>
                <Link to='/'>Home</Link>
                <br />
                <Link to='/info'>Info</Link>
                <br />
                <Link to='/about'>About</Link>
                <br />
                <button onClick={() => back()}>Go Back</button>
            </nav>
        </div>
    )
}

export default withRouter(Header);
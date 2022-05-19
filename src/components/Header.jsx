import icon from '../assets/images/animated_icon_search.gif'

export const Header = ({ title }) => {
    return (
        <header>
            <h1>{ title }</h1>
            <img src={ icon } alt="animated_icon_search" />
        </header>
    )
}
import './styles.css'

interface ButtonProps {
    title: string
    onClick?: () => void
}

const Button = ({title, onClick}:ButtonProps) => (
    <button className="button" onClick={onClick}>{title}</button>
)

export default Button
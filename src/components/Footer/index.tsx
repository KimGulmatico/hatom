import './styles.css'

interface FooterProps {
    children: React.ReactNode
    className?: string
}

const Footer = ({children, className}:FooterProps) => (
    <div className={`footer ${className}`}>
        {children}
    </div>
)

export default Footer
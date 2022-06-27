import './styles.css'

interface GradientButtonProps {
    title: string
    onClick?: () => void
}

const GradientButton = ({title, onClick}:GradientButtonProps) => (
    <button 
        className="px-5 py-3 font-semibold text-xl text-white rounded-xl bg-gradient-to-r from-green-600 to-green-900" 
        onClick={onClick
    }>
        { title}
    </button>
)

export default GradientButton
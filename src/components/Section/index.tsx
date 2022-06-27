import './styles.css'

interface SectionProps {
  children: React.ReactNode
  className?: string
}

const Section = ({ children, className }: SectionProps) => (
  <div className={`section ${className}`}>
    {children}
  </div>
)

export default Section
import { ShieldAlert } from 'lucide-react'

export type StatusType = 'active' | 'success' | 'negative'

interface StatusCardProps {
  status: StatusType
  text: string
  isVisible: boolean
}

const statusStyles = {
  active: {
    bg: 'bg-blue-100/90',
    text: 'text-blue-700',
    icon: 'text-blue-600'
  },
  success: {
    bg: 'bg-green-100/90',
    text: 'text-green-700',
    icon: 'text-green-600'
  },
  negative: {
    bg: 'bg-red-100/90',
    text: 'text-red-700',
    icon: 'text-red-600'
  }
}

export function StatusCard({ status, text, isVisible }: StatusCardProps) {
  const styles = statusStyles[status]
  
  return (
    <div
      className={`
        ${styles.bg} ${styles.text}
        p-4 rounded-lg flex items-center justify-between
        transition-all duration-500 ease-out
        ${isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-5'
        }
      `}
    >
      <span className="text-left font-medium">{text}</span>
      <ShieldAlert className={`w-5 h-5 ${styles.icon}`} />
    </div>
  )
}
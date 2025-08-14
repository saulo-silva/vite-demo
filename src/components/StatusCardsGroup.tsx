import { ShieldAlert } from 'lucide-react'

const cardTexts = [
  'System initializing...',
  'Loading modules...',
  'Ready to start...'
]

export function StatusCardsGroup() {
  return (
    <div className="space-y-4 w-full max-w-md">
      <div className="p-4 rounded-lg flex items-center justify-between opacity-0 animate-status-card-1">
        <span className="text-left font-medium animate-status-text-1">{cardTexts[0]}</span>
        <ShieldAlert className="w-5 h-5 animate-status-icon-1" />
      </div>
      
      <div className="p-4 rounded-lg flex items-center justify-between opacity-0 animate-status-card-2">
        <span className="text-left font-medium animate-status-text-2">{cardTexts[1]}</span>
        <ShieldAlert className="w-5 h-5 animate-status-icon-2" />
      </div>
      
      <div className="p-4 rounded-lg flex items-center justify-between opacity-0 animate-status-card-3">
        <span className="text-left font-medium animate-status-text-3">{cardTexts[2]}</span>
        <ShieldAlert className="w-5 h-5 animate-status-icon-3" />
      </div>
    </div>
  )
}

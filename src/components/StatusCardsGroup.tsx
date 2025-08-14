import { useState, useEffect } from 'react'
import { StatusCard, type StatusType } from './StatusCard'

interface CardState {
  status: StatusType
  isVisible: boolean
}

const cardTexts = [
  'System initializing...',
  'Loading modules...',
  'Ready to start...'
]

export function StatusCardsGroup() {
  const [cards, setCards] = useState<CardState[]>([
    { status: 'negative', isVisible: false },
    { status: 'negative', isVisible: false },
    { status: 'negative', isVisible: false }
  ])

  useEffect(() => {
    // Card 1: negative → active
    setTimeout(() => {
      setCards(prev => prev.map((card, idx) =>
        idx === 0 ? { status: 'negative', isVisible: true } : card
      ))
    }, 600)

    setTimeout(() => {
      setCards(prev => prev.map((card, idx) =>
        idx === 0 ? { status: 'active', isVisible: true } : card
      ))
    }, 1500)

    // Card 2: negative → success → active
    setTimeout(() => {
      setCards(prev => prev.map((card, idx) =>
        idx === 1 ? { status: 'negative', isVisible: true } : card
      ))
    }, 1200)

    setTimeout(() => {
      setCards(prev => prev.map((card, idx) =>
        idx === 1 ? { status: 'success', isVisible: true } : card
      ))
    }, 2100)

    setTimeout(() => {
      setCards(prev => prev.map((card, idx) =>
        idx === 1 ? { status: 'active', isVisible: true } : card
      ))
    }, 3300)

    // Card 3: negative → success → active
    setTimeout(() => {
      setCards(prev => prev.map((card, idx) =>
        idx === 2 ? { status: 'negative', isVisible: true } : card
      ))
    }, 1800)

    setTimeout(() => {
      setCards(prev => prev.map((card, idx) =>
        idx === 2 ? { status: 'success', isVisible: true } : card
      ))
    }, 2700)

    setTimeout(() => {
      setCards(prev => prev.map((card, idx) =>
        idx === 2 ? { status: 'active', isVisible: true } : card
      ))
    }, 3900)
  }, [])

  return (
    <div className="space-y-4 w-full max-w-md">
      {cards.map((card, index) => (
        <StatusCard
          key={index}
          status={card.status}
          text={cardTexts[index]}
          isVisible={card.isVisible}
        />
      ))}
    </div>
  )
}

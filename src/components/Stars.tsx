import { HiMiniStar } from 'react-icons/hi2'

interface StarsProps {
  number: number
  className?: string
}

export default function Stars({
                                number,
                                className = 'flex justify-center',
                              }: StarsProps) {
  return (
    <div className={className}>
      {Array.from({ length: number }).map((_, index) => (
        <HiMiniStar
          size={20}
          key={index}
          className="text-brand"
        />
      ))}
    </div>
  )
}

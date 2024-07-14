import { HiMiniPhone } from 'react-icons/hi2'

export default function CallUs() {
  return (
    <a
      href="tel:+15249205320"
      className="flex items-center gap-3"
    >
      <HiMiniPhone size={25} />
      <span className="text-stone-800 font-medium">+1 524 9205 320</span>
    </a>
  )
}

import Image from 'next/image'

interface LogoProps {
  color?: 'light' | 'dark'
}

export default function Logo({ color = 'dark' }: LogoProps) {
  return (
    <Image
      src={color === 'light' ? '/light_logo.png' : '/dark_logo.png'}
      className="w-[15%] max-w-[80px]"
      width={80}
      height={80}
      alt="logo"
    />
  )
}

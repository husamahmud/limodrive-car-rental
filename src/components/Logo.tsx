import Image from 'next/image'

export default function Logo() {
  return (
    <Image
      src="/dark_logo.png"
      width={80}
      height={80}
      alt="logo"
    />
  )
}

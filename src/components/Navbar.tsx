import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-transparent backdrop-blur-sm z-50">
      <div className="container mx-auto flex justify-between items-center p-2">
        <Link href="/" className="flex items-center space-x-2">
          {/* Add your logo - replace '/logo.png' with your actual logo path */}
          <Image 
            src="/images/jh-logo11.png" 
            alt="Janvi Hatwar" 
            width={60} 
            height={60}
            className="rounded-full"
          />
          
        </Link>
        
        <div className="space-x-6">
          <Link href="/" className="hover:text-primary-500 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-primary-500 transition-colors">
            About
          </Link>
          <Link href="/projects" className="hover:text-primary-500 transition-colors">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-primary-500 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
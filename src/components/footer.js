import { Newspaper } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center space-x-2">
            <Newspaper className="h-6 w-6" />
            <span className="text-xl font-bold">NewsApp</span>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-sm hover:underline underline-offset-4" href="/about">
              About
            </Link>
            <Link className="text-sm hover:underline underline-offset-4" href="/privacy">
              Privacy
            </Link>
            <Link className="text-sm hover:underline underline-offset-4" href="/terms">
              Terms
            </Link>
          </nav>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} NewsApp. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}


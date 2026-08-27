import { ArrowUp } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer>
      <div className="shell footer-inner">
        <p>© {new Date().getFullYear()} {profile.name}. Built with Next.js.</p>
        <a href="#top">Back to top <ArrowUp aria-hidden="true" size={15} /></a>
      </div>
    </footer>
  );
}

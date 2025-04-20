import './Footer.css'
import { useEffect, useState } from "react";

export default function Footer() {
    const [isPulsing, setIsPulsing] = useState(false);
    let seen = false;

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const pageHeight = document.documentElement.scrollHeight;
            // Check if user is near the bottom (e.g., within 100px)
            if (pageHeight - scrollPosition < 130 && !seen) {
                setIsPulsing(true);
                setTimeout(() => {
                    setIsPulsing(false);
                }, 10000); // match animation time
                seen = true
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <footer className={`footer transition-transform ${isPulsing ? "animate-pulse-scale" : ""}`}>
            <h2 className="text-xl text-gray-600 mb-6 bordered-letter">Let's connect!</h2>
            <div className="flex justify-center gap-6">
                <a
                href="https://www.linkedin.com/in/bharath-subramanyam/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline bordered-letter"
                style={{ paddingRight: '30px' }}
                >
                LinkedIn
                </a>
                <a
                href="mailto:bharath.subramanyam.v1@gmail.com"
                className="text-blue-500 hover:underline bordered-letter"
                >
                Email
                </a>
            </div>
        </footer>
    );
}
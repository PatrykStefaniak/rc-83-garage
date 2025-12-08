import Image from "next/image";

export default function Logo() {
    return (
        <Image
            src="/logo.jpg"
            alt="RC 83 GARAGE Logo"
            width={60}
            height={60}
            className="transition-all duration-300"
        />
    );
}

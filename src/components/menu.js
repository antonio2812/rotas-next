import Link from "next/link";
import styles from "../app/styles/menu.css";

export default function Menu() {
    return(
        <div className="navbar">
        
            <div><Link href="/" target="_blank" title="Ínicio">Home</Link></div>
            
            <div><Link href="/sobre" target="_blank" title="Sobre">Sobre</Link></div>
            
            <div><Link href="/servicos" target="_blank" title="Serviços">Serviços</Link></div>
            
            <div><Link href="/endereco" target="_blank" title="Endereço">Endereço</Link></div>
            
        </div>
    )
}
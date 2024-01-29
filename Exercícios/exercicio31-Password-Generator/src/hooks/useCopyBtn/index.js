import { useState } from "react";

export default function useCopyBtn () {
    const [ btnText, setBtnText ] = useState("Copy")

    function copyBtn () {
        setBtnText("Copied")
        navigator.clipboard.writeText(document.getElementById("password").textContent)
    }

    const copy = () => { 
        const password = document.getElementById("password").textContent
        password !== "" ? copyBtn() : alert("Não há senha para copiar")
    }

    const resetBtn = () => {
        setBtnText("Copy")
    }

    return { btnText, copy, resetBtn }
}
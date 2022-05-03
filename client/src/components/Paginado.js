import React from "react";
import '../css/Paginado.css'

export  default function Paginado({vgPerPage,allVideogames,paginado}){
    const pageNumbers=[]
    for(let i=1;i<=Math.ceil(allVideogames/vgPerPage);i++){
        pageNumbers.push(i)
    }


    return(
        <nav>
            <ul>
                {pageNumbers && pageNumbers.map(p=>{
                   return( <li  className="Paginado" key={p}>
                    <a  className="BotonPaginado" onClick={()=>paginado(p)}>{p}</a>
                    </li>)
                })}
            </ul>

        </nav>
    )
}
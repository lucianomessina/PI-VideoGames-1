import React from "react";
import '../css/Paginado.css'

export  default function Paginado({vgPerPage,allVideogames,paginado,curretnPage}){
    const pageNumbers=[]
    for(let i=1;i<=Math.ceil(allVideogames/vgPerPage);i++){
        pageNumbers.push(i)
    }
    // console.log(curretnPage)

    return(
        <nav>
            <ul>
                {/* <li><a className="BotonPaginado" onClick={()=>paginado(curretnPage-1)}></a></li> */}
                {pageNumbers && pageNumbers.map(p=>{
                   return( <li  className="Paginado" key={p}>
                    <button  className="BotonPaginado" onClick={()=>paginado(p)}>{p}</button>
                    </li>)
                })}
                {/* <li key={next}><a className="BotonPaginado" onClick={()=>paginado(curretnPage+1)}></a></li> */}

            </ul>

        </nav>
    )
}
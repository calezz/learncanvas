export function content(){
    const canvas=document.createElement("canvas")
    const style ={
        width:"100vw",
        height:"100vh",
    }
    Object.assign(canvas.style,style)
    return(canvas)
}


export function content(){
    const canvas=document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    ctx.fillRect(150,0,150,20)
    ctx.fillRect(0,20,150,20)
    const style ={
        width:"100%",
        height:"100px",
    }

    Object.assign(canvas.style,style)
    return(canvas)
}


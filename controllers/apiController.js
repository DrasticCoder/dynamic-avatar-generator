import { catchAsyncError } from "../middleware/catchAsyncErrors.js";

export const generateAvatar = catchAsyncError(async (req, res, next) => {

    const name = req.query.name || 'john+doe'; 
    const background = req.query.background || 'DCDDDC'; 
    const color = req.query.color || '000'; 
    const size = req.query.size || 200; 
    const length = req.query.length || 2; 
    const fontSize = req.query.fontSize || 24; 
    const fontStyle = req.query.fontStyle || 'normal'; 
    const rounded = req.query.rounded || false; 
    const uppercase = req.query.uppercase || true; 
    const format = req.query.format || 'svg'; 

    //  const { 
    //     name,
    //     background,
    //     color,
    //     size,
    //     length,
    //     fontSize,
    //     fontStyle,
    //     rounded,
    //     uppercase,
    //     format
    //  } = req.query;

    console.log( "Name = " , name )
    console.log( "background = " , background )
    console.log( "color = " , color )
    console.log( "size = " , size )
    console.log( "length = " , length )
    console.log( "fontSize = " , fontSize )
    console.log( "fontStyle = " , fontStyle )
    console.log( "rounded = " , rounded )
    console.log( "uppercase = " , uppercase )
    console.log( "format = " , format )
    

    res.render('output', {name,background,color,size,length,fontSize,fontStyle,rounded,uppercase,format} )
});

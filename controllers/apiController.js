import { catchAsyncError } from "../middleware/catchAsyncErrors.js";

export const generateAvatar = catchAsyncError(async (req, res, next) => {

    let name = req.query.name || 'john doe'; // name or content without space
    const background = req.query.background || 'DCDDDC'; // Hex code without '#'
    const color = req.query.color || '000'; // Hex code without '#'
    const size = req.query.size || 200; // output img dimention
    const length = req.query.length || 2; // length of content in avatar
    const fontSize = req.query.fontSize || 24; 
    const fontStyle = req.query.fontStyle || 'normal';  // ['bold','italic']
    const rounded = req.query.rounded || false; // for circular img
    const uppercase = req.query.uppercase || true; 
    let format = req.query.format || 'svg'; // ['png','svg']
    
    if(!req.accepts('image/svg+xml')){
        format = 'png'
    }

    if(uppercase){
        name = name.toUpperCase();
    } else {
        name = name.toLowerCase();
    }

 
// Ensure length is between 1 and name's length
if (length < 1) {
    length = 1;
  } else if (length > name.length) {
    length = 2;
  }
  
 // Generate the new name based on length
if (length === 2) {
    name = name.split(' ').map(part => part.charAt(0)).join('');
  } else if (length >= 3 && length <= name.length) {
    const midIndex = Math.floor(name.length / 2);
    const startIndex = midIndex - Math.floor(length / 2);
    const endIndex = startIndex + length;
    name = name.substring(0, startIndex) + name.substring(endIndex);
  }
  
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

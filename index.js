var qrcode=require('qrcode')
var opts={
    type:'image/jpeg',
}
qrcode.toFile("./qr.png",'https://chhavisrivastav.vercel.app/',
function(err){
    if(err)
    {
        
        console.log(err)
    }
    console.log('success')
})
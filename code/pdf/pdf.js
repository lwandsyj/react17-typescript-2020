const fs =require('fs')
const pdf=require('pdf-extraction')
const path=require('path')
const filePath = path.join(__dirname,'./1.pdf')
const buffer =fs.readFileSync(filePath)

pdf(buffer).then((data)=>{
    const str="<html><body>"+data.text+"</body></html>"
    fs.writeFile(path.join(__dirname,'./index1.html'),str,(err)=>{
        console.log('success')
    })
})
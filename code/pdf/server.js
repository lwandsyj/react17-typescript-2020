let Epub = require('epub')
const { fstat } = require('fs')
const path=require('path')
const fs =require('fs')
const filePath = path.join(__dirname,'./2.epub')
const app=new Epub(filePath)
let arr=[]
app.on('end',()=>{
    //console.log(app.manifest)
  //  console.log(app.metadata)
  
   let i=0;
    app.flow.forEach((item,index)=>{
        app.getChapter(item.id,(err,txt)=>{
            i++;
           arr.push(txt)
           if(i==app.flow.length){
            const str="<html><body>"+arr.join()+"</body></html>"
            fs.writeFile(path.join(__dirname,'./index-1.html'),str,(err)=>{
        
            })
           }
           
        })
    })
   
})
app.parse()

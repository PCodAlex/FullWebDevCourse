const http=require('http');// http is used to create web server 
const fs=require('fs');//uses to read files (html ,css, js and images)
const path=require('path');//use to safely handle file paths 

const port=3003;// that initalize the prot number wher the server will run


//libuv
const server=http.createServer((req,res)=>{// this createServer function runs every time someone visit your server // req->request from browser // resposnse to browser
    const filePath=path.join(__dirname,req.url==='/'? 'index.html':req.url);
    console.log(filePath);// if user visits http://localhost:3003/ it will load index.html and if user visit http://localhost:3003/style.css it will load style.css // __dirname -> current folder where server file exists 
    const extName=String(path.extname(filePath)).toLowerCase(); //it is used to get the file extension 
    const mimeTypes={//it tells browser what type of file it is 
        '.html':'text/html',
        '.css':'text/css',
        '.js':'text/javascript',
        '.jpg':'image/jpeg',
        '.json':'application/json',
        '.png':'text/png'
    };
    const contentType=mimeTypes[extName] || 'application/octet-stream';// if extension exists use correct type and if not exist then use default type 

    fs.readFile(filePath,(error,content)=>{//asycronous function to read the file
        if(error){
            if(error.code==='ENOENT'){// Error no entry or error no entity [file not found]
                res.writeHead(404,{'content-type':'text/html'});
                res.end('404 : file not found bro');
            }
        }else{// if file found 
            res.writeHead(200,{'content-type':contentType});// 200 = success
            res.end(content,'utf-8')// sends file content to browser
        }
    })  
});
server.listen(port,()=>{// server start 
    console.log(`server is listening on port ${port}`);
});
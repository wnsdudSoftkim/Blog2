const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const user = require('./db/user')
const post = require('./db/post')
const comment = require('./db/comment')
const cors = require('cors')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const app = express()

const corsOptions = {
    origin: 'https://stark-hamlet-20836.herokuapp.com', // 허락하고자 하는 요청 주소
    credentials: true, // true로 하면 설정한 내용을 response 헤더에 추가 해줍니다.
};

app.use(cors(corsOptions)); // config 추가

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "blog/build")));
  }
  
  
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "blog/build", "index.html"));
  });



app.use(bodyParser())

app.get('/',(req,res) => {
    res.send('Hello')
})

const PORT = process.env.PORT || 5000

app.listen(PORT , () => {
    console.log('Running at PORT ',PORT,process.env.PORT)
})

app.post('/Sign',(req,res) => {
    const {name,email,password} = req.body
    if(name && password && email ) {
        user.SignUp(name,email,password)
        res.send('Success')
    }else {
        res.send('Failure')
    }
    
})
app.post('/Signin',(req,res) => {
    const {email,password} = req.body
    const sessions = req.session
    user.ValidateSignin(email,password,function(result) {
        if(result) {
            sessions.email=email
            res.send('Success')
        }else {
            res.send('Failure')
        }
      
    })
})
app.post('/AddPost',(req,res) => {
    const{title,body} = req.body
    post.addPost(title,body,result=> {
        if(result) {
            res.send('Success')
        }else {
            res.send('Failure')
        }
    })
    
    

})
app.post('/getPost',(req,res) => {
    post.getPost(result => {
        res.send(result)
    })
})

app.post('/findPost',(req,res) => {
    const id = req.body.id
    post.findPost(id,result=> {
        res.send(result)
        
    })
})

app.post('/DelPost',(req,res) => {
    const id = req.body.id
    post.DelPost(id,result=> {
        res.send(result)
    })
})

app.post('/Comment',(req,res)=> {
    const {email,password,body} = req.body
    comment.Comment(email,password,body)
    res.send(email)
})
import Express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const port = 5000;

const app = Express();
app.use(Express.json());

app.use(cors({
  origin: ['http://localhost:3000'],
  methods: ["POST","GET","DELETE","PUT"],
  credentials: true
}));

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "doctorsoft"
});

conn.connect((err) => {
  if (err) {
    console.log("Error connecting to database", err)
  } else {
    console.log("Connection successful")
  }
});

app.post('/receptionist', (req, res) => {
  const { name, email, password } = req.body;
  const sql = "INSERT INTO `receptionist`(`name`, `email`, `password`) VALUES (?)";
  conn.query(sql, [[name, email, password]], (err, result) => {
    if (err) {
      console.error("Error in the internal server", err);
      return res.status(500).json({ error: "Error in the internal server" });
    }
    console.log(result);
    return res.json(result);
  });
});


app.post('/login',(req,res) => {
    const {email, password}= req.body;
    const  sql = "SELECT * FROM receptionist WHERE email=? AND password=? ";

    conn.query(sql,[email,password], (err,result)=> {
        if(err) {
            console.error("Error in the internal server", err)
        }
        if(result.length === 0){
          return res.json({message: "User not found"});
        }
        if(result.length > 0 )
        {
          return res.json({message:"user is present"});
          
        }
      
        

        
    })
})

app.post('/patient',(req,res) => {

  const values =[
    req.body.ID,
    req.body.Name,
    req.body.Age,
    req.body.Address,
    req.body.MobileNo,
    req.body.Simtom
  ]
 
  const sql = "INSERT INTO `patient` (`ID`, `Name`, `Age`, `Address`, `MobileNo`, `Simtom`) VALUES (?)";
  conn.query(sql, [values], (err, result) => {
    if (err) {
      return console.error("Error in the internal server", err);
      
    }
    return res.json(result);
  });

});


app.get('/patientreport', (req,res) => {
  
  const sql = "SELECT * FROM `patient` ";

  conn.query(sql, (err,result) => {
    if(err) return res.json({message:"err in the database connection"})
    return res.json(result);
  })
})


app.delete('/delete/:id', (req,res) =>{
  const id = req.params.id;
  console.log(id);

  const sql = "DELETE FROM `patient` WHERE `ID`=?";

  conn.query(sql, [id], (err,result) => {
    if(err) return res.json({message:"err in the internal server"})
    return res.json(result);
  })
})

app.all('/patientedit/:id' , (req,res) =>{
  const idedit= req.params.id;
  

  const values =[
    req.body.ID,
    req.body.Name,
    req.body.Age,
    req.body.Address,
    req.body.MobileNo,
    req.body.Simtom,
    idedit
  ]
  const sql = "UPDATE `patient` SET `ID`=?,`Name`=?,`Age`=?,`Address`=?,`MobileNo`=?,`Simtom`=? WHERE ID=? ";

  conn.query(sql,values, (err, result) => {
    if (err) {
      return console.error("Error in the internal server", err);
      
    }
    return res.json(result);
  });

})

app.get('/patientrecord', (req,res) => {
  const sql = `SELECT COUNT(ID)
  FROM patient;`;

  conn.query(sql, (err,data) => {
    if(err) return res.json(err)
    return res.json(data)
  })
})

app.get('/doctormedi/:id', (req, res) => {
  const sql = "SELECT * FROM `patient` WHERE ID =?";

  conn.query(sql,[req.params.id], (err, result) => {
    if(err) return res.json(err);
    return res.json(result);
  })
})


app.post('/doctormedicine', (req, res) => {
  const { ID, Date, medi1, medi2, medi3, medi4, m1, a1, n1, m2, a2, n2, m3, a3, n3, m4, a4, n4} = req.body;

  const sql = "INSERT INTO `doctormedicine`(`ID`, `Date`, `medi1`, `medi2`, `medi3`, `medi4`, `m1`, `a1`, `n1`, `m2`, `a2`, `n2`, `m3`, `a3`, `n3`, `m4`, `a4`, `n4`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

  const values = [ID, Date, medi1, medi2, medi3, medi4, m1 ? 1 : 0, a1 ? 1 : 0, n1 ? 1 : 0, m2 ? 1 : 0, a2 ? 1 : 0, n2 ? 1 : 0, m3 ? 1 : 0, a3 ? 1 : 0, n3 ? 1 : 0, m4 ? 1 : 0, a4 ? 1 : 0, n4 ? 1 : 0];

  conn.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error in the internal server", err);
      return res.status(500).json({ error: "Error in the internal server" });
    }
    console.log(result);
    return res.json({ message: "Data inserted successfully" });
  });
});



app.get('/finalpatientreport', (req, res) => {

  const sql = "SELECT * FROM `doctormedicine`";

  conn.query(sql, (err, result) => {
    if(err) return res.json(err)
    return res.json(result);
})
})

app.get('/print/:id',(req, res) => {

  const sql = `SELECT d.*, p.* 
  FROM doctormedicine d 
  INNER JOIN patient p ON d.ID = p.ID
  WHERE d.number =?`;

  conn.query(sql, [req.params.id], (err, result) => {
    if(err) return res.json(err)
    return res.json(result);
  })
})

app.get('/editpatientfetch/:id', (req, res) => {
  const sql = "SELECT * FROM `patient` WHERE ID =?";

  conn.query(sql, [req.params.id], (err, result) => {
    if(err) return res.json(err)
    return res.json(result);
  })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

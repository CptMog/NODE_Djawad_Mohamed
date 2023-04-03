const fs = require('fs');

//1
fs.readFile('students.txt','utf-8',(err,data)=>{
    if(err){ 
     console.error(err);
     return;
    }
    console.log(data)
})

//1 bis.
let data = fs.readFileSync('students.txt','utf8');

//2
let tab_data = data.split(' \r\n')
tab_data.shift()
let studentNoteSupTo17=[]; 

tab_data.map(item=>{
    let note = item.split(' ')[0];
    const value = parseInt(note);
    if(value>17){
        studentNoteSupTo17.push(item)
    }

})

//3
let bestNote=-1;
let bestStudent = '';
studentNoteSupTo17.map(item=>{
    let note = parseInt(item.split(' ')[0]);
    if(note>bestNote){ 
        bestNote=note;
        bestStudent=item;
    }
})


//4
const students = [];
tab_data.map(item=>{
    let studentDetails = item.split(' ');
    students.push({note: studentDetails[0],
                   name: studentDetails[1],
                   city: studentDetails[2]
                    })
})
students.pop() //supprimer la dernière ligne qui est null

//5 
students.sort((studentA,studentB)=>studentA.note-studentB.note)

//6
fs.appendFileSync('students.txt','18 Sonia Paris')
fs.appendFileSync('students.txt','17 Clarisse Marseille')

//7
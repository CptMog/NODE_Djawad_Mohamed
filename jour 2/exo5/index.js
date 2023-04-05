const fs = require("fs");
const readline = require("readline");
const json = JSON.parse( fs.readFileSync("./students.json") );

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.setPrompt("OHAI> ");
  rl.prompt();
  
  rl.on("line", (line) => {
    const students = json.students;

    const isDataSet = students.find((std)=> std.name.toLowerCase() == line.trim().toLocaleLowerCase() ?std:"" )

    if(isDataSet){
        
        let moyenne=0;
        for (const item of students) {
            
            if(item.name == isDataSet.name){
                
                for (const note of item.notes) {
                    
                    moyenne += note;
                }
            }
        }
        console.log("moyenne : "+moyenne/4);
    }else{
        console.log('Je ne connais pas cette élève !') 
    }

    //si l'on souhaite arrêter le process
    if(line.trim()=='stop'){
        rl.close()
        return;
    }

    rl.prompt();
  }).on("close", () => {
    console.log("Have a great day!");
    process.exit(0); // arrêt du processus
  });
require('dotenv').config()

exports.utils= {
    getMention : (student) =>{
        //si student.note est dans l'interval [12<= note <14]
        if( 12<= parseInt(student.note) && parseInt(student.note) < 14 ){
            student.mention = process.env.NOT_BAD;
        }

        //si student.note est dans l'interval [14<= note <16]
        if ( 14<= parseInt(student.note) && parseInt(student.note) < 16 ){
            student.mention = process.env.GOOD;
        }

        //si student.note est dans l'interval [16<= note]
        if ( 16 <= parseInt(student.note) ){
            student.mention = process.env.VERY_GOOD;
        }

        return student
    }
}
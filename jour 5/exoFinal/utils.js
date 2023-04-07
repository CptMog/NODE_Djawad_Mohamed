const dayjs = require('dayjs')
exports.utils = {
    formatDateAllBirth : (students) =>{
        for (let index = 0; index < students.length; index++) {
            students[index].birth = dayjs(students[index].birth).locale('fr').format('DD/MM/YYYY');   
        }
    }
}
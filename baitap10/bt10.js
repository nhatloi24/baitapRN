class StudentList {

    constructor (){
        this.students = [];
    }

    addStudent(student){
        this.students.push(student);

    }

    removeStudent(student){
        const index = this.students.findIndex( s => s.id === student.id);
        if (index !== -1){
            this.students.splice(index, 1);
        }

    }

    displayStudent(student){
        this.students.forEach((student) => {
            console.log(`ID: ${student.id}, Name: ${student.name}, Age: ${student.age}`)
        })

    }
}

const studentList = new StudentList();

const student1 = {
    id: 1,
    name: "Kỳ Bùi",
    age: 25
    };
    const student2 = {
    id: 2,
    name: "Gia Bảo",
    age: 28
    };

    studentList.addStudent(student1);
    studentList.addStudent(student2);

    studentList.removeStudent(student2);
    studentList.displayStudent();
    
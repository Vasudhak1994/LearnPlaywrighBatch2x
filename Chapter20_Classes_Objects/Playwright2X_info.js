class playwright2xBatch {
    constructor(Student_Name, Student_Age, Student_Salary) {
        this.Student_Name = Student_Name;
        this.Student_Age = Student_Age;
        this.Student_Salary = Student_Salary;
    }

    static Mentor_name = "Pramod Dutta";
    static course_name = "Playwright 2.x";
    static course_duration = "4 Months";
    static course_fee = 10000;

    static course_info() {
        console.log(`Mentor Name: ${this.Mentor_name}`);
        console.log(`Course Name: ${this.course_name}`);
        console.log(`Course Duration: ${this.course_duration}`);
        console.log(`Course Fee: ${this.course_fee}`);
    }

    student_info() {
        console.log(`Student Name: ${this.Student_Name}`);
        console.log(`Student Age: ${this.Student_Age}`);
        console.log(`Student Salary: ${this.Student_Salary}`);
    }

}

const student1 = new playwright2xBatch("John Doe", 25, 50000);
const student2 = new playwright2xBatch("Jane Smith", 28, 60000);
const student3 = new playwright2xBatch("Alice Johnson", 30, 70000);
const student4 = new playwright2xBatch("Bob Brown", 35, 80000);
const student5 = new playwright2xBatch("Charlie Davis", 22, 40000);
const student6 = new playwright2xBatch("Eve Wilson", 27, 55000);
const student7 = new playwright2xBatch("Frank Miller", 32, 75000);
const student8 = new playwright2xBatch("Grace Lee", 29, 65000);
const student9 = new playwright2xBatch("Hank Taylor", 31, 72000);
const student10 = new playwright2xBatch("Ivy Anderson", 26, 48000);

student1.student_info();
student2.student_info();
student3.student_info();
student4.student_info();
student5.student_info();
student6.student_info();
student7.student_info();
student8.student_info();
student9.student_info();
student10.student_info();

playwright2xBatch.course_info();


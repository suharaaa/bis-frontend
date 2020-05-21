export class Results{
    
    private class : any;
    private term : string;
    private subject : string;
    private students: any;
    private marks: string;

    constructor(value){
        this.class = value.class;
        this.term = value.term;
        this.subject = value.subject;
        this.students = value.students;
        this.marks = value.marks;
    }

    public get getTerm(): string {
        return this.term;
    }

    public set setTerm(term: string) {
        this.term = term;
    }
    
    public get getSubject(): string {
        return this.subject;
    }

    public set setSubject(subject: string) {
        this.subject = subject;
    }

    public get getMarks(): string {
        return this.marks;
    }

    public set setMarks(marks: string) {
        this.marks = marks;
    }
    
}
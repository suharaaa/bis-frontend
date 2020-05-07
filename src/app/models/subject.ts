export class Subject {
    private subjectname: string;
    private class : any;
    private teacher: any;

    constructor(value) {
        this.subjectname = value.subjectname;
        this.class = value.class;
        
        this.teacher = value.teacher;
    }

        public get getsubjectname() : string {
            return this.subjectname;
        }
    
        public set setsubjectname(subjectname : string) {
            this.subjectname = subjectname;
        }
    
       
    

}
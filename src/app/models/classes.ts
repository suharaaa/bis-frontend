export class Classes {
    private name: string;
 
    private teacher: any;

    constructor(value) {
        this.name = value.name;
     
        
        this.teacher = value.teacher;
    }

        public get getname() : string {
            return this.name;
        }
    
        public set setname(name : string) {
            this.name = name;
        }
    
       
    

}
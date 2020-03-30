export class Student {
    private fname: string;
    private lname: string;
    private address: string;
    private gender: string;
    private dob: Date;
    private nation: string;
    private religion: string;
    private mail: string;
    
    private mname: string;
    private moccupation: string;
    private mworkp: number;
    private maddress: string;
    private mphone: number;
    private memail: string;
    private faname: string;
    private foccupation: string;
    private fworkp: number;
    private faddress: string;
    private fphone: number;
    private femail: string;

    private createdOn: Date;
    private updatedOn: Date;


    constructor(fname,lname,address,gender,dob,nation,religion,mail,mname,moccupation,mworkp,maddress,mphone,memail,faname,foccupation,fworkp,faddress,fphone,femail){
        this.fname=fname;
        this.lname=lname;
        this.address=address;
        this.gender=gender;
        this.dob=dob;
        this.nation=nation;
        this.religion=religion;
        this.mail=mail;
        this.mname=mname;
        this.moccupation=moccupation;
        this.mworkp=mworkp;
        this.maddress=maddress;
        this.mphone=mphone;
        this.memail=memail;
        this.faname=faname;
        this.foccupation=foccupation;
        this.fworkp=fworkp;
        this.faddress=faddress;
        this.fphone=fphone;
        this.femail=femail;
    }

    
    public get getfname() : string {
        return this.fname;
    }

    public set setfname(fname : string) {
        this.fname = fname;
    }

    public get getlname() : string {
        return this.lname;
    }

    public set setlname(lname : string) {
        this.lname = lname;
    }

    public get getaddress() : string {
        return this.address;
    }

    public set setaddress(address : string) {
        this.address = address;
    }

    public get getgender() : string {
        return this.gender;
    }

    public set setgender(gender : string) {
        this.gender = gender;
    }    
    
    public get getdob() : Date {
        return this.dob;
    }

    public set setdob(dob : Date) {
        this.dob = dob;
    }

    public get getnation() : string {
        return this.nation;
    }

    public set setnation(nation : string) {
        this.nation = nation;
    }

    public get getreligion() : string {
        return this.religion;
    }

    public set setreligion(religion : string) {
        this.religion =religion ;
    }

    public get getmail() : string {
        return this.mail;
    }

    public set setmail(mail : string) {
        this.mail = mail;
    }

    public get getmname() : string {
        return this.mname;
    }

    public set setmname( mname: string) {
        this.mname = mname ;
    }

    public get getmoccupation() : string {
        return this.moccupation;
    }

    public set setmoccupation(moccupation : string) {
        this.moccupation =moccupation ;
    }

    public get getmworkp() : number {
        return this.mworkp;
    }

    public set setmworkp(mworkp : number) {
        this.mworkp =mworkp ;
    }

    public get getmaddress() : string {
        return this.maddress;
    }

    public set setmaddress(maddress : string) {
        this.maddress = maddress;
    }

    public get getmphone() : number {
        return this.mphone;
    }

    public set setmphone( mphone: number) {
        this.mphone =mphone ;
    }

    public get getmemail() : string {
        return this.memail;
    }

    public set setmemail(memail : string) {
        this.memail =memail ;
    }

    public get getfaname() : string {
        return this.faname;
    }

    public set setfaname( faname: string) {
        this.faname = faname ;
    }

    public get getfoccupation() : string {
        return this.foccupation;
    }

    public set setfoccupation(foccupation : string) {
        this.foccupation =foccupation ;
    }

    public get getfworkp() : number {
        return this.fworkp;
    }

    public set setfworkp(fworkp : number) {
        this.fworkp =fworkp ;
    }

    public get getfaddress() : string {
        return this.faddress;
    }

    public set setfaddress(faddress : string) {
        this.faddress = faddress;
    }

    public get getfphone() : number {
        return this.fphone;
    }

    public set setfphone( fphone: number) {
        this.fphone =fphone ;
    }

    public get getfemail() : string {
        return this.femail;
    }

    public set setfemail(femail : string) {
        this.femail =femail ;
    }
}

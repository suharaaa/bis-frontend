export class Student {
    private admissionNumber: string;
    private fname: string;
    private lname: string;
    private address: string;
    private gender: string;
    private dob: Date;
    private nation: string;
    private religion: string;
    private mail: string;
    private class: any;
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
    private img: string;


    constructor(value) {
        this.admissionNumber = value.admissionNumber;
        this.fname = value.fname;
        this.lname = value.lname;
        this.address = value.address;
        this.gender = value.gender;
        this.dob = value.dob;
        this.nation = value.nation;
        this.religion = value.religion;
        this.mail = value.mail;
        this.class = value.class;
        this.mname = value.mname;
        this.moccupation = value.moccupation;
        this.mworkp = value.mworkp;
        this.maddress = value.maddress;
        this.mphone = value.mphone;
        this.memail = value.memail;
        this.faname = value.faname;
        this.foccupation = value.foccupation;
        this.fworkp = value.fworkp;
        this.faddress = value.faddress;
        this.fphone = value.fphone;
        this.femail = value.femail;
    }

    public get ImageUrl(): string {
        return this.img;
    }

    public set ImageUrl(url: string) {
        this.img = url;
    }

    public get getAdmissionNumber(): string {
        return this.admissionNumber;
    }

    public set setAdmissionNumber(admissionNumber: string) {
        this.admissionNumber = admissionNumber;
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

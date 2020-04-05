export class Teacher {
    private tid: string;
    private fname: string;
    private lname: string;
    private address: string;
    private gender: string;
    private nic: string;
    private dob: Date;
    private phone: number;
    private mstatus: string;
    private mphone: number;
    private nationality: string;
    private religion: string;
    private mail: string;
    private qul: string;
    private createdOn: Date;
    private updatedOn: Date;


    constructor(value) {
        this.tid = value.tid;
        this.fname = value.fname;
        this.lname = value.lname;
        this.address = value.address;
        this.gender = value.gender;
        this.nic = value.nic;
        this.dob = value.dob;
        this.phone = value.phone;
        this.mstatus = value.mstatus;
        this.mphone = value.mphone;
        this.nationality = value.nationality;
        this.religion = value.religion;
        this.mail = value.mail;
        this.qul = value.qul;
    }

    public get gettidNumber(): string {
        return this.tid;
    }

    public set settidNumber(tid: string) {
        this.tid = tid;
    }

    public get getfname(): string {
        return this.fname;
    }

    public set setfname(fname: string) {
        this.fname = fname;
    }

    public get getlname(): string {
        return this.lname;
    }

    public set setlname(lname: string) {
        this.lname = lname;
    }

    public get getaddress(): string {
        return this.address;
    }

    public set setaddress(address: string) {
        this.address = address;
    }

    public get getgender(): string {
        return this.gender;
    }

    public set setgender(gender: string) {
        this.gender = gender;
    }

    public get getdob(): Date {
        return this.dob;
    }

    public set setdob(dob: Date) {
        this.dob = dob;
    }

    public get getnationality(): string {
        return this.nationality;
    }

    public set setnationality(nationality: string) {
        this.nationality = nationality;
    }

    public get getreligion(): string {
        return this.religion;
    }

    public set setreligion(religion: string) {
        this.religion = religion ;
    }

    public get getnic(): string {
        return this.nic;
    }

    public set setnic(nic: string) {
        this.nic = nic;
    }

    public get getmail(): string {
        return this.mail;
    }

    public set setmail(mail: string) {
        this.mail = mail;
    }

    public get getmphone(): number {
        return this.mphone;
    }

    public set setmphone( mphone: number) {
        this.mphone = mphone ;
    }

    public get getphone(): number {
        return this.phone;
    }

    public set setphone( phone: number) {
        this.phone = phone ;
    }

    public get getmstatus(): string {
        return this.mstatus;
    }

    public set setmstatus(mstatus: string) {
        this.mstatus = mstatus;
    }

    public get getqul(): string {
        return this.qul;
    }

    public set setqul(qul: string) {
        this.qul = qul;
    }


}

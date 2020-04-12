import { Teacher } from './teacher';
import { STAFF_ATTENDANCE_STATUS } from './staff-attendance-status.enum';

export class StaffAttendance {

    private _id?: string;
    private date?: string;
    private teacher: Teacher;
    private createdAt?: Date;
    private updatedAt?: Date;
    private status: STAFF_ATTENDANCE_STATUS;

    constructor(
        teacher: Teacher, status: STAFF_ATTENDANCE_STATUS,
        id?: string, date?: string, createdAt?: Date, updatedAt?: Date
    ) {
        this._id = id;
        this.date = date;
        this.teacher = teacher;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.status = status;
    }

    public get Id(): string {
        return this._id;
    }

    public set Id(id: string) {
        this._id = id;
    }

    public get Date(): string {
        return this.date;
    }

    public set Date(date: string) {
        this.date = date;
    }

    public get Teacher(): Teacher {
        return this.teacher;
    }

    public set Teacher(teacher: Teacher) {
        this.teacher = teacher;
    }

    public get CreatedAt(): Date {
        return this.createdAt;
    }

    public get UpdatedAt(): Date {
        return this.updatedAt;
    }

    public get Status(): STAFF_ATTENDANCE_STATUS {
        return this.status;
    }

    public set Status(status: STAFF_ATTENDANCE_STATUS) {
        this.status = status;
    }

    public getTeachersName(): string {
        return `${this.teacher.getfname} ${this.teacher.getlname}`;
    }

    public getTeacherID(): string {
        return this.teacher.gettid;
    }

}
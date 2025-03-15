export interface IRequest {
    url: string;
    method: string;
    body?: { [key: string]: any };
    queryParams?: any;
    useCredentials?: boolean;
    headers?: Record<string, string>;
    nextOption?: RequestInit;
}

export interface IBackendRes<T> {
    error?: string | string[];
    message: string;
    statusCode: number | string;
    data?: T;
}

export enum Gender {
    MALE = "MALE",
    FEMALE = "FEMALE",
}

export enum Day {
    MONDAY = "MONDAY",
    TUESDAY = "TUESDAY",
    WEDNESDAY = "WEDNESDAY",
    THURSDAY = "THURSDAY",
    FRIDAY = "FRIDAY",
}

export interface Admin {
    id: string;
    username: string;
}

export interface Student {
    id: string;
    username: string;
    name: string;
    surname: string;
    email?: string;
    phone?: string;
    address: string;
    img?: string;
    birthday: Date;
    gender: Gender;
    classId: number;
    gradeId: number;
    createdAt: Date;
}

export interface Teacher {
    id: string;
    username: string;
    name: string;
    surname: string;
    email?: string;
    phone?: string;
    address: string;
    img?: string;
    birthday: Date;
    gender: Gender;
    createdAt: Date;
}

export interface Grade {
    id: number;
    level: number;
}

export interface Class {
    id: number;
    name: string;
    capacity: number;
    supervisorId?: string;
    gradeId: number;
}

export interface Subject {
    id: number;
    name: string;
}

export interface Lesson {
    id: number;
    name: string;
    day: Day;
    startTime: Date;
    endTime: Date;
    subjectId: number;
    classId: number;
    teacherId: string;
}

export interface Attendance {
    id: number;
    date: Date;
    present: boolean;
    studentId: string;
    lessonId: number;
}

export interface Announcement {
    id: number;
    title: string;
    description: string;
    date: Date;
    classId?: number;
}
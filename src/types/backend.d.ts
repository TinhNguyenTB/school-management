export { };

declare global {
    interface IRequest {
        url: string;
        method: string;
        body?: { [key: string]: any };
        queryParams?: any;
        useCredentials?: boolean;
        headers?: Record<string, string>;
        nextOption?: RequestInit;
    }

    interface IBackendRes<T> {
        error?: string | string[];
        message: string;
        statusCode: number | string;
        data?: T;
    }

    interface IModelPaginate<T> {
        meta: {
            current: number;
            pageSize: number;
            totalPages: number;
            count: number;
        },
        result: T[]
    }

    enum Gender {
        MALE = "MALE",
        FEMALE = "FEMALE",
    }

    enum Day {
        MONDAY = "MONDAY",
        TUESDAY = "TUESDAY",
        WEDNESDAY = "WEDNESDAY",
        THURSDAY = "THURSDAY",
        FRIDAY = "FRIDAY",
    }

    interface Admin {
        id: string;
        username: string;
    }

    interface Student {
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

    interface Teacher {
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

    interface Grade {
        id: number;
        level: number;
    }

    interface Class {
        id: number;
        name: string;
        capacity: number;
        supervisorId?: string;
        gradeId: number;
    }

    interface Subject {
        id: number;
        name: string;
    }

    interface Lesson {
        id: number;
        name: string;
        day: Day;
        startTime: Date;
        endTime: Date;
        subjectId: number;
        classId: number;
        teacherId: string;
    }

    interface Attendance {
        id: number;
        date: Date;
        present: boolean;
        studentId: string;
        lessonId: number;
    }

    interface Announcement {
        id: number;
        title: string;
        description: string;
        date: Date;
        classId?: number;
    }
} 
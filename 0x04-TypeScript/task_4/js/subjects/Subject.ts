/// <reference path="Teacher.ts" />

import { Teacher } from "./Teacher"; // optional depending on setup

export interface Subject {
    setTeacher(teacher: Teacher): void;
}

export class MathSubject implements Subject {
    teacher: Teacher;

    setTeacher(teacher: Teacher): void {
        this.teacher = teacher;
    }
}

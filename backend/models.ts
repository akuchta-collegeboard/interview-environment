export interface Volunteer {
    name: string;
    skills: string[];
    availability: Date[];
}

export interface Project {
    name: string;
    organizationName: string;
    requiredDays: number;
    dueDate: Date;
    skillsNeeded: string[];
}
export type MockDocument = {
    id:number
    title: string
    subject: string
    university: string
    type: string
    pages: number
}

export const MockDocuments: MockDocument[] =[
    {
        id:1,
        title: 'Introduction to Macroeconomics',
        subject: 'Economics',
        university: 'University of Amsterdam',
        type: 'Lecture Notes',
        pages: 34,
    },
        {
        id:2,
        title: 'Data structures and Algorithms',
        subject: 'Computer Science',
        university: 'University of Nairobi',
        type: 'Study Guide',
        pages: 48,
    },
        {
        id:3,
        title: 'Fourier transforms',
        subject: 'Electrical Engineering',
        university: 'University of Nairobi',
        type: 'Course Notes',
        pages: 62,
    },
        {
        id:4,
        title: 'Calculus 1 - Complete Revision Notes',
        subject: 'Mathematics',
        university: 'University of Bucharest',
        type: 'Revison Notes',
        pages: 22,
    },
]
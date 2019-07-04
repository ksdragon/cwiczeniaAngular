export interface Task{
    _id?: {$oid: string};    
    title?: string;
    statusTask?: boolean;
    dateCreated?: string;
    endDate? : string;
}
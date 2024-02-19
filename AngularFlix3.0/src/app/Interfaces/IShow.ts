export interface IShow{
    ShowId:number;
    ShowName:string;
    Year:number;
    Status:string;
    RunTime:string;
    TotalRunTime:string;
    genres:string[];
    Studios:string;
    Creator:string;
    Summary:string;
    Description:string;
    ShowPoster:string;
    Actors:[
        {
        id:number;
        ActorName:string;
        img:string;
        role:string
        }
    ]
}
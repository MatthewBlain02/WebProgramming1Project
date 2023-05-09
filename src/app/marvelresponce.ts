export interface Marvelresponce {
    Name:string;
    Description:string;
    Thumbnail:img;
    Comics:comics;
}
interface img{
    Path:string;
    Extenstion:string; 
}
interface comics{
    items:comic[];
}
interface comic{
    ResourceURI:string;
    Name:string;
}

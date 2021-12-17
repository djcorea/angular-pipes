import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'upper'
})

export class UpperPipe implements PipeTransform{

    transform(value :string,isUpper:boolean = true):string{
        
        if(isUpper){
            return value.toUpperCase();
        }else{
            return value.toLowerCase();
        }
    }
}

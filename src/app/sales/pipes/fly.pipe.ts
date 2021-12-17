import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name  :  'fly'
})

export class FlyPipe implements PipeTransform{

    transform(value:boolean){
        return value?"vuela":"no vuela";
    }
}
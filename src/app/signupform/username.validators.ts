import { AbstractControl, ValidationErrors } from "@angular/forms";
import { reject } from "q";


export class UserValidators{
    static cannotContainSpace(control:AbstractControl) : ValidationErrors|null
    {
        if((control.value as string).indexOf(' ')>=0)
        return {cannotContainSpace:true}
        //!return {cannotContainSpace:'your message'}
        //! return {minlength:{requiredlength:10,actualLength:control.value.length}}

        return null;
    }
    static shouldbeUnique(control:AbstractControl):Promise< ValidationErrors | null>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(control.value=='mosh')
                resolve ({shouldbeUnique:true});
                else
                resolve(null);
            },2000);
        })
    }
}
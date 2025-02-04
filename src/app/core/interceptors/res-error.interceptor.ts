import { ToastrService } from 'ngx-toastr';
import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const resErrorInterceptor: HttpInterceptorFn = (req, next) => {


const _ToastrService=inject(ToastrService)

  return next(req).pipe(
catchError( (err)=>{

console.log('from interceptor' , err.error.message);
_ToastrService.error(err.error.message , 'freshCart')
return throwError( () => err)
})
  )
};

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Status, Mode, Credentials } from 'src/app/models/login';
import { BehaviorSubject, merge, Observable, of, Subject } from 'rxjs';
import {
  catchError,
  delay,
  exhaustMap,
  map,
  mapTo,
  skip,
  takeUntil,
  withLatestFrom
} from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'mdg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 // States
 public status$ = new BehaviorSubject<Status>('initial');
 public mode$ = new BehaviorSubject<Mode>('signin');
 // Events
 public signIn$ = new Subject<Credentials>();
 public signUp$ = new Subject<Credentials>();
 private destroy$ = new Subject<void>();

 
 sign$: Observable<boolean>;/* = merge(
   this.signIn$.pipe(map((x): ['signin', Credentials] => ['signin', x])),
   this.signUp$.pipe(map((x): ['signup', Credentials] => ['signup', x]))
 ).pipe(
   exhaustMap(([type, credentials]) => {
     const call$ =
       type === 'signin'
         ? this.authService.signIn(credentials)
         : this.authService.signUp(credentials);

     return call$.pipe(
       mapTo(true),
       catchError(() => of(false)),
       takeUntil(this.mode$.pipe(skip(1)))
     );
   }),
   takeUntil(this.destroy$)
 );*/

 constructor(private authService: AuthService, private router: Router) {}

 ngOnInit() {
   // Init Effect
   merge(this.signIn$, this.signUp$)
     .pipe(takeUntil(this.destroy$))
     .subscribe(() => {
       this.status$.next('pending');
     });

   // Handle response
   /*
   this.sign$.subscribe(result => {
     this.status$.next(result ? 'success' : 'error');
   });*/

   // Handle success (both cases)
   this.status$
     .pipe(
       withLatestFrom(this.mode$),
       delay(500),
       takeUntil(this.destroy$)
     )
     .subscribe(([status, mode]) => {
       if (status === 'success' && mode === 'signin') {
         this.router.navigateByUrl('/');
       }
       if (status === 'success' && mode === 'signup') {
         this.mode$.next('signin');
       }
     });

     this.mode$.next('signin');
   // Handle tab change (reset status)
   this.mode$
     .pipe(
       skip(1),
       takeUntil(this.destroy$)
     )
     .subscribe(mode => {
       this.status$.next('initial');
     });
 }

 ngOnDestroy() {
   this.destroy$.next();
 }

}

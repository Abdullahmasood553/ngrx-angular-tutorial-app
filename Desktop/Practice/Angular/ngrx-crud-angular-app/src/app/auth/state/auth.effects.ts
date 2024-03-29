import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loginStart, loginSuccess } from "./auth.actions";
import { exhaustMap, map } from "rxjs";
import { AuthService } from "../../services/auth.service";
import { AppState } from "../../store/app.state";
import { Store } from "@ngrx/store";
import { setLoadingSpinner } from "../../store/shared/shared.actions";

@Injectable()
export class AuthEffects {
    constructor(private action$: Actions, private authService: AuthService, private store: Store<AppState>) {}

    login$ = createEffect(() => {
        return this.action$.pipe(
            ofType(loginStart),
            exhaustMap((action) => {
                return this.authService.login(action.email, action.password).pipe(
                    map((data) => {
                    this.store.dispatch(setLoadingSpinner({status: false}));    
                    const user = this.authService.formatUser(data);    
                    return loginSuccess({ user });
                    }),
                );
            })
        );
    });
}
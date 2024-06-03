import { State, Action, StateContext, Selector } from '@ngxs/store';
import { SaveSessionId } from './auth.actions';
import { Injectable } from '@angular/core';

export interface AuthStateModel {
  sessionId: string | null;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    sessionId: null
  }
})
@Injectable()
export class AuthState {
  @Selector()
  static getSessionId(state: AuthStateModel): string | null {
    return state.sessionId;
  }
  
  @Action(SaveSessionId)
  saveSessionId(ctx: StateContext<AuthStateModel>, action: SaveSessionId) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      sessionId: action.sessionId
    });
  }
}

import { State, Action, StateContext } from '@ngxs/store';
import { SaveSessionId } from './auth.actions';

export interface AuthStateModel {
  sessionId: string | null;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    sessionId: null
  }
})
export class AuthState {

  @Action(SaveSessionId)
  saveSessionId(ctx: StateContext<AuthStateModel>, action: SaveSessionId) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      sessionId: action.sessionId
    });
  }
}

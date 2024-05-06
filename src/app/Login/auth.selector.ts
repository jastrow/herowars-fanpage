import { createSelector, Selector } from '@ngxs/store';
import { AuthState, AuthStateModel } from './auth.state';
import { SaveSessionId } from './auth.actions';

export class AuthSelectors {
  @Selector([AuthState])
  static getSessionId(state: AuthStateModel): string | null {
    return state.sessionId;
  }
}
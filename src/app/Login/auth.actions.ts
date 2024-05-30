export class SaveSessionId {
  static readonly type = '[Auth] Save Session ID';
  constructor(public sessionId: string|null) {}
}
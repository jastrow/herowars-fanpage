import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { GildenkriegService, IMember } from './Gildenkrieg.service';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-gildenkrieg',
  templateUrl: './Gildenkrieg.component.html',
  styleUrl: './Gildenkrieg.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GildenkriegComponent { 
  private service = inject(GildenkriegService);
  public members$ = new BehaviorSubject<IMember[]>([]);
  public memberForm = new FormGroup({
    name: new FormControl<string>(''),
    info: new FormControl<string>('')
  });
  public columns = ['name', 'aktiv', 'info', 'actions'];
  public days = ['montag','dienstag', 'mittwoch', 'donnerstag', 'freitag'];

  constructor() {
    this.service.getMembers().subscribe(d => {
      if(d) { this.members$.next(d); }
    });

    this.service.getWeek(null, null).subscribe(d => console.log(d));
  }

  addMember() {
    const member = {
      name: this.memberForm.get('name')?.value ?? '',
      info: this.memberForm.get('info')?.value ?? '',
    } as IMember;
    this.service.addMember(member).subscribe(d => {
      console.log(d);
    });
  }

  deleteMember(memberId: number | undefined) {

  }

  editMember(memberId: number | undefined) {

  }

  getIcon(day: string, member: any | undefined) {
    let icon = 'tuiIconSunsetLarge';
    switch(member[day]) {
      case 'a': icon = 'tuiIconSunLarge'; break;
      case 'w': icon = 'tuiIconSunriseLarge'; break;
      case 'i': icon = 'tuiIconSunsetLarge'; break;
    };
    console.log(icon);
    return icon;
  }

  setStatus(day: string, memberId: number |undefined) {
    this.service.setStatus(day,memberId).subscribe(d => console.log(d));
  }

}

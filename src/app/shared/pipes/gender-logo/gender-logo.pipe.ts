import { Pipe, PipeTransform } from '@angular/core';
import { SvgGenderIcons } from '../../constants';
import { Gender } from '../../enums';

@Pipe({
  name: 'genderLogo',
})
export class GenderLogoPipe implements PipeTransform {
  transform(gender: Gender): string {
    if (gender === Gender.female) {
      return SvgGenderIcons.female;
    }
    if (gender === Gender.male) {
      return SvgGenderIcons.male;
    }
    return SvgGenderIcons.unknow;
  }
}

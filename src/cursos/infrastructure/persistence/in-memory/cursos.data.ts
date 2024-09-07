import { Curso } from '../../../domain/curso';

export class CursosData {
  public database: Curso[] = [
    new Curso(
      '1',
      'Curso de Javascript',
      'JS-01',
      'Curso de JS em foco backend',
      ['Jackie'],
      [],
      '2024-10-20',
      '2024-11-20',
    ),
  ];
}

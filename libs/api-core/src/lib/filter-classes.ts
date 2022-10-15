import { ClassConstructor } from 'class-transformer';

export function filterModuleClasses<T = ClassConstructor<any>[]>(
  classes: any
): T {
  return Object.entries(classes)
    .filter(([key, value]) => key.endsWith('Module'))
    .map(([key, value]) => value) as any;
}

export function filterEntityClasses<T = ClassConstructor<any>[]>(
  classes: any
): T {
  return Object.entries(classes)
    .filter(([key, value]) => !key.endsWith('DTO'))
    .map(([key, value]) => value) as any;
}

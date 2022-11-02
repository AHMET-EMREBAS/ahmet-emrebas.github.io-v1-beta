function pluralName(name: string) {
  if (name.endsWith('y')) {
    return name.slice(0, name.length - 1) + 'ies';
  }

  if (name.endsWith('s')) {
    return name + 'es';
  }

  return name + 's';
}

export function resourceName(name: string) {
  return {
    SINGULAR_NAME: name,
    PLURAL_NAME: pluralName(name),
    VIEW_NAME: name + 'view',
  };
}

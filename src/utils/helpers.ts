export const  getValueByPath = (obj: any, path: string) => {
  const keys = path.split('.');
  let currentValue = obj;

  for (let key of keys) {
    if (key.includes('[')) {
      const parts = key.split(/[\[\]]/).filter(Boolean);
      for (let part of parts) {
        currentValue = currentValue[part];
      }
    } else {
      currentValue = currentValue[key];
    }

    if (currentValue === undefined) {
      return undefined;
    }
  }

  return currentValue;
}
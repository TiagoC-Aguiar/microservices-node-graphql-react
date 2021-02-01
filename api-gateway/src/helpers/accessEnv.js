const cache = {};

const accessEnv = (key, defaultValue) => {
  if(!(key in process.env)) {
    if(defaultValue) {
      return defaultValue;
    }
    throw new Error(`${key} não encontrado em proccess.env!`);
  }

  if(cache[key]) {
    return cache[key];
  }

  cache[key] = process.env[key];

  return process.env[key];
}

export default accessEnv;


// Function annotations for parameters and return type
// Return annotation will show error if incorrect return type or no return

const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const mutliply = function (a: number, b: number): number {
  return a * b;
}

const logger = (message: string): void => {
  console.log(message);
};

// never: only used when a function should 'never' return anything.
const throwError = (message: string): never => {
  throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = ({ date, weather }: { date: Date, weather: string }): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);

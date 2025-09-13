export default {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["./src/tests"],
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  testRegex: "(/__test__/.*|(\\.|/)(test|spec))\\.ts?$",
  moduleFileExtensions: ["ts", "js", "json", "node"],
};

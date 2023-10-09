export function Demo() {
  type VoidingFunction = () => void;
  type NumberFunction = (paramA: number, paramB: string) => number;

  const myFunction: VoidingFunction = () => {
    console.log("myFunction called!");
    return 1;
  };

  const myNumberFunction: NumberFunction = () => {
    return 2;
  };

  const otherFunc = (zahl: number): string => {
    return "string";
  };

  myFunction();
  myNumberFunction(10, "hallo");
}

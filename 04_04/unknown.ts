export function Demo() {
  let foobar: any = { author: "Lukas Weckner" };
  let foobar_unkown: unknown = { author: "Lukas Weckner" };

  let myString: string;
  myString = foobar;
  //myString = foobar_unkown;
}

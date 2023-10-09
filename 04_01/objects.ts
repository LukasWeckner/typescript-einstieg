export function Demo() {
type AuthorObject = {
  author: string;
  adress: {
  city: string;
  streetNumber: number;
};
  hobbies: string[];
};

 let persons: AuthorObject[] = [{
  author: "Lukas Weckner",
  adress: {
  city: "Wonderland",
  streetNumber: 700,
},
hobbies: ["soccer", "ultimate-frisbee"],
},
{
  author: "Lukas Weckner",
  adress: {
  city: "Wonderland",
  streetNumber: 700,
},
hobbies: ["soccer", "ultimate-frisbee"],
}];
}

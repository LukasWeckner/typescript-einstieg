export function Demo() {
  enum MyEnumErrorCode {
    ERR_1 = "hallo1",
    ERR_199 = "hallo2",
    ERR_9000 = "hallo3",
  }

  type MyErrorCode = "ERR_1" | "ERR_199" | "ERR_9000";
  const error: MyErrorCode = "ERR_9000";

  const error2: MyEnumErrorCode = MyEnumErrorCode.ERR_199;
  console.log(MyEnumErrorCode);
}

Demo();

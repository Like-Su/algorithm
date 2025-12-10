import { isNumber, isString } from "@/utils/is";

const BINARY_MAP = "01";
export function binaryToDecimal(binary: string | Array<string>) {
  let originBinary: string | string[] | number = binary;
  if (isNumber(binary)) {
    originBinary = binary.toString() as string;
  }
  if (isString(binary)) {
    originBinary = binary.split('') as string[];
  }
  console.log(originBinary)
  originBinary = (originBinary as string[]).filter(binary => BINARY_MAP.includes(binary));

  return originBinary.reduceRight((prev, cur, index, binarys) => {
    const decimal = Number(cur) === 1 ? Math.pow(2, binarys.length - index - 1) : 0;
    return prev + decimal;
  }, 0);
}

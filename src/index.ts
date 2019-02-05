import { promDo } from "./promDo";
import { promFor } from "./promFor";
import { promWhile } from "./promWhile";

export namespace Promlop {
  export const doLoop = promDo;
  export const forLoop = promFor;
  export const whileLoop = promWhile;
}

export default Promlop;

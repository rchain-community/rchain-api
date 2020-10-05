// @ts-check
const { freeze, entries, fromEntries } = Object;

export const RhoExpr = freeze({
  /**
   * @param { RhoExpr } expr
   */
  parse(expr) {
    const recur = RhoExpr.parse;
    // @ts-ignore
    // eslint-disable-next-line no-unused-vars
    const [[type, { data }], ..._] = entries(expr);
    switch (type) {
      case 'ExprBool':
      case 'ExprInt':
      case 'ExprString':
      case 'ExprBytes':
      case 'ExprUri':
      case 'ExprUnforg':
        return data;
      case 'ExprList':
      case 'ExprTuple':
        return data.map(recur);
      case 'ExprMap':
        return fromEntries(entries(data).map(([k, v]) => [k, recur(v)]));
      case 'ExprPar':
        return { ExprPar: data.map(recur) };
      default:
        throw new TypeError(type);
    }
  },
});

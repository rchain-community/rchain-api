// @ts-check
const { freeze, entries, fromEntries } = Object;

export const RhoExpr = freeze({
    /**
     *
     * @param { ExprBool | ExprInt | ExprString | ExprBytes | ExprUri | ExprUnforg
     *        | ExprList | ExprMap | ExprTuple | ExprPar } expr
     */
    parse(expr) {
        const recur = RhoExpr.parse;
        const [[type, { data }], ..._] = entries(expr);
        switch(type) {
            case "ExprBool":
            case "ExprInt":
            case "ExprString":
            case "ExprBytes":
            case "ExprUri":
            case "ExprUnforg":
                return data;
            case "ExprList":
            case "ExprTuple":
                return data.map(recur);
            case "ExprMap":
                return fromEntries(entries(data).map(([k, v]) => [k, recur(v)]));
            case "ExprPar":
                return { "ExprPar": data.map(recur) };
        }
    },
});

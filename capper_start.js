/** capper_start
 *
 * ISSUE: this belongs in the capper library.
 */
const Capper = require('Capper');


exports.command = command;
/**
 * Handle make / drop / post commands.
 *
 * @return true if cli command was handled; false if there was no
 *         command, which indicates the server should be started.
 */
function command(cli, config, saver, sturdy) {
    const parseArg = Capper.caplib.makeParseArg(sturdy.wkeyStringToLive);

    if (cli["drop"]) {
        saver.drop(saver.credToId(parseArg(cli["WEBKEY"])));
        saver.checkpoint().then(() => console.log("drop done"));
    } else if (cli["make"]){
        const msg = [cli["REVIVER"]].concat(cli["ARG"].map(parseArg));
        const obj = saver.make.apply(undefined, msg);
        if (!obj) {console.error("cannot find maker " + cli["REVIVER"]); return true;}
        saver.checkpoint().then(
            () => console.log(sturdy.idToWebkey(saver.asId(obj)))
        ).done();
    } else if (cli["post"]) {
        const rx = sturdy.wkeyStringToLive(cli["WEBKEY"].substring(1));
        if (typeof rx !== "object") {
            console.error("bad target object webkey; forget '@'?");
        } else {
            const vowAns = saver.deliver(saver.asId(rx), cli["METHOD"], ...cli["ARG"].map(parseArg));
            sturdy.vowAnsToVowJSONString(vowAns).then(
                answer => console.log(answer));
        }
    } else {
        return false;
    }
    
    return true;
}


exports.makeReviver = makeReviver;
function makeReviver(apps) {
    function check(name, cond) {
        if (!cond) {
            console.log('cannot revive', name);
            throw new Error(name);
        }
    }
    
    function parseName(name) {
        const parts = name.split('.');
        check(name, parts.length == 2);
        return { app: parts[0], method: parts[1] };
    }

    return Object.freeze({
        toMaker: name => {
	    // console.log('DEBUG Reviver.toMaker:', name);
            const n = parseName(name);
	    // console.log('DEBUG Reviver.toMaker:', n);
            const maker = apps[n.app][n.method];
	    // console.log('DEBUG Reviver.toMaker:', maker);
            check(name, maker);
            return maker;
        },
        sendUI: (res, name, path) => {
            if (path) {
                res.sendfile(`./${name}/ui/${path}`);
            } else {
                const n = parseName(name);
                res.sendfile(`./${n.app}/ui/${n.method}.html`);
            }
        }
    });
}

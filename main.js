exports.makeGateway = makeGateway;

function makeGateway() {
    return Object.freeze({ gateway, client });
}


function gateway(context) {
    const state = context.state;

    function init() {
	state.clients = [];
    }

    function makeClient({id, secret}, label) {
	const it = context.make('gateway.client', id, secret);
	state.clients.push([label, it]);
	return it;
    }
    const getClients = () => state.clients;

    return Object.freeze({ init, makeClient, getClients });
}


function client(context) {
    const state = context.state;

    function init(id, secret) {
	state['id'] = id;
	state['secret'] = secret;
    }

    const getId = () => state.id;

    return Object.freeze({ init, getId });
}

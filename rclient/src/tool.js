const harden = x => Object.freeze(x);

export function makeTool(addr, { fetch }) {
  return harden({
    async status() {
      const reply = await fetch(`${addr}/status`);
      return reply.json();
    },
  });
}

export async function main({ fetch, getElementById }) {
  const byId = getElementById;
  function setText(id, text) {
    byId(id).textContent = text;
  }
  function getSelection(id) {
    const sel = byId(id);
    return sel.options[sel.selectedIndex].value;
  }

  const addr = getSelection('nodeAddress');
  const tool = makeTool(addr, { fetch });
  const info = await tool.status();
  setText('status', JSON.stringify(info));
}

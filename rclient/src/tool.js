const harden = x => Object.freeze(x);

export function makeTool({ fetch }) {
  return harden({
    async status() {
      const reply = await fetch('/status');
      return reply.json();
    },
  });
}

function narrow(base, { fetch }) {
  return path => fetch(`${base}${path}`);
}

function EtherscanAPI(apikey, { fetch }) {
  return harden({
    async getblockcountdown(blockno) {
      const reply = await fetch(`?module=block&action=getblockcountdown&blockno=${blockno}&apikey=${apikey}`);
      const info = await reply.json();
      if (info.status !== '1') {
        throw new Error(info.message);
      }
      return parseFloat(info.result.EstimateTimeInSec);
    },
  });
}
EtherscanAPI.base = 'https://api.etherscan.io/api';

export async function main({ alert, fetch, getElementById, now }) {
  const byId = getElementById;
  function setText(id, text) {
    byId(id).textContent = text;
  }
  function getSelection(id) {
    const sel = byId(id);
    return sel.options[sel.selectedIndex].value;
  }

  const apikey = byId('apikey').value;
  const ethInfo = EtherscanAPI(apikey, { fetch: narrow(EtherscanAPI.base, { fetch }) });
  byId('project').addEventListener('click', async () => {
    const countdownBlock = byId('CountdownBlock').value;
    let durSec;
    try {
      durSec = await ethInfo.getblockcountdown(countdownBlock);
    } catch (err) {
      alert(err.message);
      return;
    }
    const eta = new Date(now() + durSec * 1000);
    byId('ETA').textContent = eta.toISOString();
    const d = {
      hh: (durSec / 60 / 60) | 0,
      mm: ((durSec / 60) % 60) | 0,
      ss: (durSec | 0) % 60,
    };
    byId('delta').textContent = `${d.hh}:${d.mm}:${d.ss}`;
  });
  const addr = getSelection('nodeAddress');
  const tool = makeTool({ fetch: narrow(addr, { fetch }) });
  const info = await tool.status();
  setText('status', JSON.stringify(info));
}

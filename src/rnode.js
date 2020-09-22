// @ts-check

const { freeze } = Object;

function log(...args) {
  if (process.env.LOG_RNODE) {
    console.log(...args);
  }
}

/**
 * @param {typeof fetch} fetch
 */
export function RNode(fetch) {
  /**
   * @param {string} methodUrl
   * @param {?Object} request
   * @returns {Promise<Object>}
   */
  async function fetchJSON(methodUrl, request = undefined) {
    log({ methodUrl, ...(request === undefined ? {} : { request }) });
    const opts =
      request === undefined
        ? { method: 'GET' }
        : {
            method: 'POST',
            body:
              typeof request === 'string' ? request : JSON.stringify(request),
          };
    const resp = await fetch(methodUrl, opts);
    let result;
    try {
      result = await resp.json();
    } catch (err) {
      console.error({ methodUrl, request, err });
      throw err;
    }
    // Add status if server error
    if (!resp.ok) {
      const ex = new Error(result);
      // @ts-ignore
      ex.status = resp.status;
      throw ex;
    }
    return result;
  }

  return freeze({
    /** @type { (apiBase: string) => Validator } */
    validator: (apiBase) =>
      freeze({
        apiBase: () => apiBase,

        /** @type { (request: DeployRequest) => Promise<string> } */
        deploy: (request) => fetchJSON(`${apiBase}/api/deploy`, request),
      }),

    /** @type { (adminBase: string) => RNodeAdmin } */
    admin: (adminBase) =>
      freeze({
        adminBase: () => adminBase,

        /** @type { () => Promise<string> } */
        propose: () => fetchJSON(`${adminBase}/api/propose`, ''),
      }),

    /** @type { (apiBase: string) => Observer } */
    observer: (apiBase) =>
      freeze({
        apiBase: () => apiBase,

        /** @type { (request: DataRequest) => Promise<DataResponse> } */
        listenForDataAtName: (request) =>
          fetchJSON(`${apiBase}/api/data-at-name`, request),

        /** @type { (hash: string) => Promise<BlockInfo> } */
        getBlock: (hash) => fetchJSON(`${apiBase}/api/block/${hash}`),

        /** @type { (depth: number) => Promise<LightBlockInfo[]> } */
        getBlocks: (depth) => fetchJSON(`${apiBase}/api/blocks/${depth}`),

        /** @type { (deployId: string) => Promise<LightBlockInfo> } */
        findDeploy: (deployId) =>
          fetchJSON(`${apiBase}/api/deploy/${deployId}`),

        /** @type { (term: string) => Promise<ExploratoryDeployResponse> } */
        exploratoryDeploy: (term) =>
          fetchJSON(`${apiBase}/api/explore-deploy`, term),
      }),
  });
}

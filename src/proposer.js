// @ts-check

const { freeze } = Object;

/**
 * @param {{ admin?: string, boot: string, read: string }} api
 * @param {ReturnType<import('./rnode').RNode>} rnode
 * @param {SchedulerAccess} sched
 * @param {number=} period
 *
 * @typedef { {
 *   setInterval: typeof setInterval,
 *   clearInterval: typeof clearInterval,
 * } } SchedulerAccess
 */

export function proposer(api, rnode, sched, period = 2 * 1000) {
  let proposing = false;
  let waiters = 0;
  let pid;

  return freeze({
    startProposing() {
      if (!api.admin) return;
      const node = rnode.admin(api.admin);
      waiters += 1;
      if (typeof pid !== 'undefined') {
        return;
      }
      pid = sched.setInterval(() => {
        if (!proposing) {
          proposing = true;
          node
            .propose()
            .then(() => {
              console.log('proposed', { waiters });
              proposing = false;
            })
            .catch((err) => {
              console.log('propose failed', { waiters, err: err.message });
              proposing = false;
            });
        }
      }, period);
    },
    stopProposing() {
      if (waiters <= 0) {
        return;
      }
      waiters -= 1;
      sched.clearInterval(pid);
      pid = undefined;
    },
  });
}

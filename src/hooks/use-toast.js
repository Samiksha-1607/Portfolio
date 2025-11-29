/**
 * A tiny, readable toast hook for demos.
 * In this simple portfolio we show a plain alert as a stand-in for a toast system.
 * Keeping the implementation explicit makes it easier to replace later with a real toast library.
 */
export function useToast() {
	function toast({ title = '', description = '' } = {}) {
		// keep the behaviour identical to the previous version but with clearer code
		const message = (title ? title + '\n\n' : '') + description;
		// eslint-disable-next-line no-alert
		alert(message);
	}

	return { toast };
}

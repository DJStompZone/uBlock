// Remove specific shadow DOM element
uboRemoveShadowElement(args) {
    try {
        const rootElement = document.querySelector(args[0]);
        if (rootElement && rootElement.shadowRoot) {
            const targetElement = rootElement.shadowRoot.querySelector(args[1]);
            if (targetElement && targetElement.children.length > 1) {
                targetElement.children[1].remove();
            }
        }
    } catch (e) {
        console.error('uboRemoveShadowElement error:', e);
    }
}

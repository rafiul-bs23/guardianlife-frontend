declare global {
    interface Window {
        $_REVECHAT_API?: {
            Button?: {
                maximize: () => void;
                minimize: () => void;
                show: () => void;
                hide: () => void;
            };
        };
    }
}

/**
 * Programmatically opens the Revechat window.
 * Uses the $_REVECHAT_API if available, otherwise falls back to clicking the .chat-widget element.
 */
export const openReveChat = () => {
    if (window.$_REVECHAT_API && window.$_REVECHAT_API.Button) {
        window.$_REVECHAT_API.Button.maximize();
    } else {
        // Fallback: search for the chat widget element and click it if API is not ready
        const chatWidget = document.querySelector('.chat-widget') as HTMLElement;
        if (chatWidget) {
            chatWidget.click();
        }
    }
};

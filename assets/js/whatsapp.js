window.WhatsApp = (() => ({ open: message => window.open(window.SiteConfigLoader.waLink(message), '_blank', 'noopener') }))();

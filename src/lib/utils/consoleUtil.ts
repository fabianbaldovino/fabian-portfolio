/**
 * Console Easter Egg
 * Exibe uma mensagem de desenvolvedor no console do browser.
 */

// Extend Window interface
declare global {
  interface Window {
    fabian?: {
      info: () => void;
    };
  }
}

export const consoleUtil = {
  asciiArt: `
███████╗ █████╗ ██████╗ ██╗ █████╗ ███╗   ██╗
██╔════╝██╔══██╗██╔══██╗██║██╔══██╗████╗  ██║
█████╗  ███████║██████╔╝██║███████║██╔██╗ ██║
██╔══╝  ██╔══██║██╔══██╗██║██╔══██║██║╚██╗██║
██║     ██║  ██║██████╔╝██║██║  ██║██║ ╚████║
╚═╝     ╚═╝  ╚═╝╚═════╝ ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝
`,

  siteInfo: {
    name: "Fabian Baldovino",
    website: "https://fabianbaldovino.com.br",
    instagram: "https://www.instagram.com/fabianbaldovino9/",
    linkedin: "https://www.linkedin.com/in/fabianbaldovino/",
    message: "Brand Filmmaking — construindo sonhos em marcas magnéticas. 🎬"
  },

  styles: {
    title: "color: #669C46; font-size: 16px; font-weight: bold;",
    ascii: "color: #669C46; font-family: monospace; font-size: 10px; line-height: 1.2;",
    info: "color: #E8CEC2; font-size: 13px;",
    link: "color: #E8CEC2; font-size: 12px; text-decoration: underline;",
    message: "color: #E8CEC2; font-size: 12px; font-style: italic;",
  },

  display() {
    console.log(`%c${this.asciiArt}`, this.styles.ascii);
    console.log(`%c🎬 ${this.siteInfo.message}`, this.styles.title);
    console.log(`%c🌐 Website: ${this.siteInfo.website}`, this.styles.link);
    console.log(`%c📸 Instagram: ${this.siteInfo.instagram}`, this.styles.link);
    console.log(`%c💼 LinkedIn: ${this.siteInfo.linkedin}`, this.styles.link);
  },

  setupCommands() {
    window.fabian = {
      info: () => {
        console.log(`%c👁️ ${this.siteInfo.name}`, this.styles.title);
        console.log(`%c${this.siteInfo.message}`, this.styles.message);
      }
    };
  },

  init() {
    this.display();
    this.setupCommands();
  }
};

// Auto-initialize no browser
if (typeof window !== 'undefined') {
  setTimeout(() => {
    consoleUtil.init();
  }, 1000);
}
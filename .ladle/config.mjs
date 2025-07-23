/** @type {import('@ladle/react').UserConfig} */
export default {
  outDir: 'docs',
  appendToHead: `
    <style>
      ul[role="tree"] > li > div {
        text-transform: capitalize;
      }
    </style>
    <script>
      window.addEventListener('DOMContentLoaded', () => {
        const items = document.querySelectorAll('ul[role="tree"] li[role="treeitem"] > div');
        for(const item of items) {
          const title = item.title.trim().toLowerCase();
          if (title === 'simple react components') {
            item.style.fontWeight = 'bold';
            item.style.color = '#c0392b';
            break;
          }
        };
      });
    </script>
    `,
}

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
        items.forEach(item => {
          const innerText = item.textContent.trim().toLowerCase();
          if (innerText === 'simple react components') {
            item.style.fontWeight = 'bold';
            item.style.color = '#c0392b';
          }
        });
      });
    </script>
    `,
}

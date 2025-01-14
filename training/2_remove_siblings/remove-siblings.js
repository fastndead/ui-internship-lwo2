/**
 * Removes all the siblings of given node
 * @param {Object} node
 */
export function removeSiblings(node) {
  let sibling = node.parentNode.firstChild;

  while (sibling) {
    const nextSibling = sibling.nextSibling;
    if (sibling.nodeType === 1 && sibling !== node) {
      sibling.remove();
    }
    sibling = nextSibling;
  }
}

/**
 * applies given callback to every node of the tree
 * @example
 * // will print to the console '1 2 99 100'
 * traverseTree({
            value: 1,
            children: [
                {
                    value: 2,
                    children: []
                }, {
                    value: 99,
                    children: [
                        {
                            value: 100,
                            children: []
                        }
                    ]
                }
            ]
        };, (item) => console.log(item))
 * @param {Object} tree
 * @param {Function} callback
 */
export function traverseTree(tree, callback) {
  callback(tree);
  for (let i = 0; i < tree.children.length; i++) {
    traverseTree(tree.children[i], callback);
  }
}

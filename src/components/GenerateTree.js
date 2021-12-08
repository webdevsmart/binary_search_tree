import { BinarySearchTree } from "../utils/BST";

const bst = new BinarySearchTree();

function Tree(props) {
  const { data, onRemove, currentNode } = props;

  function renderTree(node) {
    return Object.entries(node).map(function ([key, value]) {
      if (key === "left" && typeof value === "object") {
        if (value !== null) {
          return (
            <li key={value.data}>
              <Tree
                data={value}
                currentNode={currentNode}
                onRemove={onRemove}
              />
            </li>
          );
        }
        if (value === null) {
          return null;
        }
      } else if (key === "right" && typeof value === "object") {
        if (value !== null) {
          return (
            <li key={value.data}>
              <Tree
                data={value}
                currentNode={currentNode}
                onRemove={onRemove}
              />
            </li>
          );
        }
        if (value === null) {
          return null;
        }
      }
    });
  }

  return data ? (
    <>
      <span
        className={`tf-nc ${
          data.left === null && data.right === null ? "child-node" : ""
        } ${Number(currentNode) === Number(data.data) ? "current-node" : ""}`}
        onClick={() => {
          console.log(data);
          onRemove(data.data);
        }}
      >
        {data.data}
      </span>
      <ul>{renderTree(data)}</ul>
    </>
  ) : (
    <></>
  );
}

export default Tree;

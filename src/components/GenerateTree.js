import { BinarySearchTree } from "../utils/BST";

const bst = new BinarySearchTree();

function Tree(props) {
  const { data, onRemove } = props;

  function renderTree(node) {
    return Object.entries(node).map(function ([key, value]) {
      if (key === "left" && typeof value === "object") {
        if (value !== null) {
          return (
            <li key={value.data}>
              <Tree data={value} onRemove={onRemove} />
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
              <Tree data={value} onRemove={onRemove} />
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
      <span className="tf-nc" onClick={() => onRemove(data.data)}>
        {data.data}
      </span>
      <ul>{renderTree(data)}</ul>
    </>
  ) : (
    <></>
  );
}

export default Tree;

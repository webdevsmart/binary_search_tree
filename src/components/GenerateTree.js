function Tree(props) {
  const { data } = props;

  function renderTree(node) {
    return Object.entries(node).map(function ([key, value]) {
      if (key === "left" && typeof value === "object") {
        if (value !== null) {
          return (
            <li
              key={value.data}
              onClick={() => {
                alert(value.data);
              }}
            >
              <Tree data={value} />
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
              <Tree data={value} />
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
      <span className="tf-nc">{data.data}</span>
      <ul>{renderTree(data)}</ul>
    </>
  ) : (
    <></>
  );
}

export default Tree;

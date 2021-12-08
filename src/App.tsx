import { useEffect, useState } from "react";
import "./App.css";
import Tree from "./components/GenerateTree";
import { RootSection, TitleSection, TreeSection } from "./styles/app.styled";
import { BinarySearchTree } from "./utils/BST";

const bst = new BinarySearchTree();

function App() {
  const [root, setRoot] = useState<any>(null);
  useEffect(() => {
    document.addEventListener("keydown", keyDown);
    return () => {
      document.removeEventListener("keydown", keyDown);
    };
  }, []);

  const keyDown = (e: any) => {
    if (e.code === "Space") {
      const number = Math.floor(Math.random() * (100 + 100 + 1)) - 100;
      bst.add(number);
      setRoot((prev: any) => ({ ...prev, ...bst.root }));
    }
  };

  return (
    <RootSection>
      <TitleSection>Binary Search Tree Generator</TitleSection>
      <TreeSection>
        <ul>
          <li>
            <Tree data={root} parent={bst.root} />
          </li>
        </ul>
      </TreeSection>
      <div>asdasdfasf</div>
    </RootSection>
  );
}

export default App;

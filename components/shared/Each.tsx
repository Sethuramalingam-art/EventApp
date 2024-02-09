import { Children } from "react";

type RenderParams = {
  render: (item: any, index: number) => any;
  of: Array<any>;
};

// instead of map for render in each component we can use Each
const Each = ({ render, of }: RenderParams) =>
  Children.toArray(of.map((item, index) => render(item, index)));

export default Each;

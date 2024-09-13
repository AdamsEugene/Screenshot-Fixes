declare module "src/custom.snippets.json" {
  const value: Snippets; // or whatever the correct type is
  export default value;
}

type SnippetContent = {
  type: "file" | string;
  path: string;
};

type Snippet = {
  selector: string;
  content: SnippetContent;
};

type Snippets = Snippet[];

// Wrangler text-import rule (see wrangler.toml [[rules]] type="Text")
// embeds *.bundle.js files as string literals at deploy time.
declare module "*.bundle.js" {
  const value: string;
  export default value;
}

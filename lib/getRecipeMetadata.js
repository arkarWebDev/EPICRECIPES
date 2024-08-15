import fs from "fs";
import matter from "gray-matter";

export default function getRecipeMetadata(basePath) {
  const folder = basePath + "/"; // recipes/
  const files = fs.readdirSync(folder);
  const markdown_files = files.filter((file) => file.endsWith(".md"));

  // read markdown file data
  const loaded_markdown_files = markdown_files.map((file) => {
    const fileContents = fs.readFileSync(`${basePath}/${file}`, "utf8");
    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title,
      cook_time: matterResult.data.cook_time,
      author: matterResult.data.author,
      created_at: matterResult.data.created_at,
      description: matterResult.data.description,
      slug: matterResult.data.title.replace(" ", "_").toLowerCase(),
      modified_title: matterResult.data.title.toLowerCase(),
    };
  });

  return loaded_markdown_files;
}

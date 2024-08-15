import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import Markdown from "markdown-to-jsx";
import getRecipeMetadata from "@/lib/getRecipeMetadata";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

const getContent = (slug) => {
  const folder = "recipes/";
  const file = `${folder}${slug}.md`;
  if (!fs.existsSync(file)) {
    notFound();
  }
  const content = fs.readFileSync(file, "utf8");

  const result = matter(content);
  return result;
};

export async function generateMetadata({ params }) {
  const title = params.slug ? ` - ${params.slug}` : "";
  return {
    title: `EPICRECIPES ${title.replace("_", " ").toUpperCase()}`,
  };
}

export async function generateStaticParams() {
  const recipes = getRecipeMetadata("recipes");
  return recipes.map((recipe) => ({ slug: recipe.slug }));
}

const RecipePage = ({ params }) => {
  const { slug } = params;
  const recipe = getContent(slug);
  const { cook_time, author, created_at, description } = recipe.data;

  return (
    <>
      <section className=" pt-10 py-5 grid grid-cols-3">
        <div className=" col-span-2 markdown-content">
          <Markdown>{recipe.content}</Markdown>
        </div>
        <div className="col-span-1">
          <div className="text-right  mb-2 ">
            <Link href={"/"} className="underline font-medium text-sm">
              Go Back Home
            </Link>
          </div>
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold mb-2">About ...</h2>
              <div className=" flex items-center gap-3 flex-wrap mb-2">
                <Badge>
                  <p className="text-xs">{author}</p>
                </Badge>
                <Badge>
                  <CalendarDays className="w-4 h-4 me-1" />
                  <p className="text-xs">{created_at}</p>
                </Badge>
                <Badge>
                  <Clock className="w-4 h-4 me-1" />
                  <p className="text-xs">{cook_time}</p>
                </Badge>
              </div>
              <p className="text-sm font-medium">{description}</p>
            </CardHeader>
          </Card>
        </div>
      </section>
      <hr className="" />
    </>
  );
};

export default RecipePage;

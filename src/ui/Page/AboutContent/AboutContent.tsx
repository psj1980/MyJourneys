import ArticleContainer from "../../ArticleContainer/ArticleContainer";

export default function AboutContent() {
  return (
    <ArticleContainer clickable={false}>
      <h1 className="text-3xl font-bold mb-4 text-center">About This Page</h1>
      <p className="mb-4 text-lg">
        Hi! I'm just a regular person who loves to travel. My journeys have
        taken me to places both near and far—sometimes with friends, sometimes
        alone, and always with a sense of curiosity. I don't travel for luxury
        or adventure sports, but for the simple joy of discovering new cities,
        tasting local food, and meeting people along the way.
      </p>
      <p className="mb-4 text-lg">
        This page is a collection of my own travel experiences. I hope my
        stories and tips help you discover something new, or inspire you to
        explore the world in your own way.
      </p>
    </ArticleContainer>
  );
}

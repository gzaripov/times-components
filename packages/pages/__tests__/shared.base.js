import React from "react";
import { scales } from "@times-components/styleguide";
import "./mocks";
import Page from "../src/pages";
import getAdTargetingConfig from "../src/article/ad-targeting-config";

const Article = Page("Article");

export default makeTest => {
  it("article page", () => {
    expect(
      makeTest(
        <Article
          articleId="test-article-id"
          scale={scales.large}
          sectionName="News"
        />
      )
    ).toMatchSnapshot();
  });

  it("adConfig is set correctly", () => {
    const article = {
      headline: "This is a headline",
      id: "this-is-a-id",
      keywords: ["this", "is", "a", "headline"]
    };

    const adTargetingConfig = getAdTargetingConfig({
      adTestMode: "testMode",
      article,
      sectionName: "sectionName"
    });

    expect(adTargetingConfig).toMatchSnapshot();
  });
};

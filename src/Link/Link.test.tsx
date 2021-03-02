import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Link } from ".";

it("Renders a link with children", () => {
  const { container } = render(
    <Link title="Link title" href="https://osequi.com">
      Children
    </Link>
  );
  expect(container.firstChild).toContainHTML("Children");
});

it("Creates link content from title", () => {
  const { container } = render(<Link title="Link title" />);
  expect(container.firstChild).toContainHTML("Link title");
});

it("Renders a link with href", () => {
  const { container } = render(
    <Link title="Link title" href="https://osequi.com" />
  );
  expect(container.firstChild["href"]).toContain("osequi");
});

it("Creates a href from title", () => {
  const { container } = render(<Link title="Link title" />);
  expect(container.firstChild["href"]).toContain("link-title");
});

it("Renders a link with title", () => {
  const { container } = render(<Link title="Link title" />);
  expect(container.firstChild).toHaveAttribute("title");
});

it("Renders a link", () => {
  const { container } = render(<Link title="Link title" />);
  expect(container.firstChild.nodeName).toBe("A");
});

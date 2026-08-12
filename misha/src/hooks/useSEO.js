import { useEffect } from "react";

export default function useSEO(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | Misha Jewels` : "Misha Jewels Private Limited";
    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", description);
    }
    window.scrollTo(0, 0);
  }, [title, description]);
}

"use client";

import { useParams } from "next/navigation";

const BlogIdDisplay = () => {
  const params = useParams();
  const { blogId } = params;

  return (
    <p>
      Id tu bai viet (tu useParams): <strong>{blogId}</strong>
    </p>
  )
}

export default BlogIdDisplay;
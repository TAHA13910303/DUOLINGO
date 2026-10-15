"use client";
import {
  BlocksRenderer,
  type BlocksContent,
}
  from "@strapi/blocks-react-renderer";

interface RichTextProps {
  content: BlocksContent;
}
export default function RichText({ content }: RichTextProps) {
  return (
    <div>
  <BlocksRenderer content={content} />
</div>
  );
}
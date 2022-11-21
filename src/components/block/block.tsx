import React, { HTMLAttributes } from "react";
import { BlockTitle } from "./block-title/block-title";
import { BlockSubtitle } from "./block-subtitle/block-subtitle";
import { BlockContent } from "./block-content/block-content";
import styles from "./block.module.scss";

interface BlockProps extends HTMLAttributes<HTMLDivElement> {
  Title?: typeof BlockTitle;
  Subtitle?: typeof BlockSubtitle;
  Content?: typeof BlockContent;
}

const Block = ({ className, children }: BlockProps) => {
  return <div className={`${styles.root} ${className}`}>{children}</div>;
};

Block.Title = BlockTitle;
Block.Subtitle = BlockSubtitle;
Block.Content = BlockContent;

export default Block;

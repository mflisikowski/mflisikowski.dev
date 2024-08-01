"use client";

import { motion } from "framer-motion";
import React, { useEffect, useId, useRef, useState } from "react";

/**
 * Properties for the GridBlock component.
 */
interface GridBlockProps {
  x: number;
  y: number;
  [key: string]: any;
}

/**
 * Properties for the main GridPattern component.
 */
interface GridPatternProps {
  yOffset?: number;
  interactive?: boolean;
  [key: string]: any;
}

/** Height of a single grid block. */
const GRID_HEIGHT = 160;

/** Width of a single grid block. */
const GRID_WIDTH = 96;

/** Tangent value used for grid coordinate calculations. */
const TAN_VALUE = 32 / 160;

/**
 * Calculate grid coordinates based on the mouse event, yOffset, and the SVG element's position.
 *
 * @param event - The mouse event.
 * @param yOffset - The vertical offset.
 * @param ref - Reference to the SVG element.
 * @returns The calculated grid coordinates.
 */
function getGridCoords(
  event: MouseEvent,
  yOffset: number,
  ref: React.RefObject<SVGSVGElement>
) {
  const rect = ref.current?.getBoundingClientRect();

  if (!rect) {
    return {
      adjustedX: -1,
      adjustedY: -1,
    };
  }

  let adjustedX = event.clientX - rect.left - rect.width / 2 - 32;
  let adjustedY = event.clientY - rect.top - yOffset;

  adjustedX += Math.tan(TAN_VALUE) * adjustedY;

  return {
    adjustedY: Math.floor(adjustedY / GRID_HEIGHT),
    adjustedX: Math.floor(adjustedX / GRID_WIDTH),
  };
}

/**
 * Component representing a single block in the grid pattern.
 *
 * @param x - The horizontal position of the block.
 * @param y - The vertical position of the block.
 * @param props - Other properties passed to the SVG path element.
 */
function GridBlock({ x, y, ...props }: GridBlockProps) {
  const transformValue = `translate(${-32 * y + GRID_WIDTH * x} ${
    GRID_HEIGHT * y
  })`;
  return (
    <motion.path
      transform={transformValue}
      d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
      {...props}
    />
  );
}

/**
 * Main component to render the grid pattern with interactive blocks.
 *
 * @param yOffset - Vertical offset for the pattern. Default is 0.
 * @param interactive - Flag to determine if the pattern is interactive. Default is false.
 * @param props - Other properties passed to the SVG element.
 */
export function GridPattern({
  yOffset = 0,
  interactive = false,
  ...props
}: GridPatternProps) {
  const [hoveredBlocks, setHoveredBlocks] = useState<number[][]>([]);
  const currentBlock = useRef<number[] | null>(null);
  const counter = useRef(0);
  const ref = useRef<SVGSVGElement | null>(null);
  const id = useId();

  /**
   * Update the list of hovered blocks based on the current position and key.
   *
   * @param blocks - The current list of hovered blocks.
   * @param adjustedX - The horizontal position of the block.
   * @param adjustedY - The vertical position of the block.
   * @param key - The unique key for the block.
   * @returns The updated list of hovered blocks.
   */
  function updateHoveredBlocks(
    blocks: number[][],
    adjustedX: number,
    adjustedY: number,
    key: number
  ): number[][] {
    const updatedBlocks = blocks.map((block) => {
      if (block[0] === adjustedX && block[1] === adjustedY) {
        return [adjustedX, adjustedY, key];
      }
      return block;
    });

    if (
      !updatedBlocks.some(
        (block) => block[0] === adjustedX && block[1] === adjustedY
      )
    ) {
      updatedBlocks.push([adjustedX, adjustedY, key]);
    }

    return updatedBlocks;
  }

  useEffect(() => {
    if (!interactive) {
      return;
    }

    function onMouseMove(event: MouseEvent) {
      const { adjustedX = 0, adjustedY = 0 } = getGridCoords(
        event,
        yOffset,
        ref
      );

      if (
        currentBlock.current?.[0] === adjustedX &&
        currentBlock.current?.[1] === adjustedY
      ) {
        return;
      }

      currentBlock.current = [adjustedX, adjustedY];
      const key = counter.current++;

      setHoveredBlocks((blocks) =>
        updateHoveredBlocks(blocks, adjustedX, adjustedY, key)
      );
    }

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [yOffset, interactive]);

  /**
   * Render the main SVG element containing the grid pattern.
   */
  return (
    <motion.svg aria-hidden="true" ref={ref} {...props}>
      <rect width="100%" height="100%" fill={`url(#${id})`} strokeWidth="0" />
      <motion.svg
        x="50%"
        y={yOffset}
        strokeWidth="0"
        className="overflow-visible"
      >
        <GridBlock x={1} y={1} animate={{ opacity: [0, 1, 0] }} />

        {hoveredBlocks.map((block) => (
          <GridBlock
            onAnimationComplete={() => {
              setHoveredBlocks((blocks) =>
                blocks.filter((b) => b[2] !== block[2])
              );
            }}
            transition={{ duration: 1, times: [0, 0, 1] }}
            animate={{ opacity: [0, 1, 0] }}
            key={block[2]}
            x={block[0]}
            y={block[1]}
          />
        ))}
      </motion.svg>
      <defs>
        <pattern
          patternTransform={`translate(0 ${yOffset})`}
          patternUnits="userSpaceOnUse"
          height={GRID_HEIGHT * 3}
          width={GRID_WIDTH}
          fill="none"
          id={id}
          x="50%"
        >
          <path d="M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128" />
        </pattern>
      </defs>
    </motion.svg>
  );
}

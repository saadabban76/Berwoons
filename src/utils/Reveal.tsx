"use client";

import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import React, { useRef, useEffect } from "react";

interface Props {
  children: JSX.Element;
  width: "100%" | "fit-content";
  showHighlight?: string;
}

const Reveal = ({
  children,
  width = "fit-content",
  showHighlight = "#DFE21D",
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <AnimatePresence>
      <div
        ref={ref}
        style={{ position: "relative", width, overflow: "hidden" }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {children}
        </motion.div>
        <motion.div
          variants={{
            hidden: { left: 0 },
            visible: { left: "100%" },
          }}
          initial="hidden"
          animate={slideControls}
          transition={{ duration: 0.5, ease: "easeIn" }}
          style={{
            position: "absolute",
            top: 4,
            bottom: 4,
            left: 0,
            right: 0,
            backgroundColor: showHighlight,
            zIndex: 20,
          }}
        />
      </div>
    </AnimatePresence>
  );
};

export default Reveal;

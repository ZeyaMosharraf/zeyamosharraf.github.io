import { motion, useAnimation, AnimationControls } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface SkillBarProps {
  name: string;
  percentage: number;
  color: "primary" | "secondary";
  custom?: number;
  controls?: AnimationControls;
}

const SkillBar = ({ name, percentage, color, custom, controls }: SkillBarProps) => {
  const barRef = useRef(null);
  const isInView = useInView(barRef, { once: true, amount: 0.5 });
  const localControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      const controlsToUse = controls || localControls;
      controlsToUse.start({
        width: `${percentage}%`,
        transition: { duration: 1, delay: 0.2 }
      });
    }
  }, [isInView, percentage, controls, localControls]);

  return (
    <div ref={barRef}>
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-gray-600">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <motion.div
          className={`h-2.5 rounded-full ${
            color === "primary" ? "bg-primary" : "bg-blue-400"
          }`}
          initial={{ width: "0%" }}
          animate={controls || localControls}
          custom={custom}
          style={{ width: "0%" }}
        />
      </div>
    </div>
  );
};

export default SkillBar;

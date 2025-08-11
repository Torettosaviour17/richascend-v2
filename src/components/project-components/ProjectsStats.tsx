import { motion, useTransform, useMotionValue, animate } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  delay?: number;
}

const AnimatedCounter = ({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  delay = 0,
}: AnimatedCounterProps) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    Number.isInteger(value) ? Math.floor(latest) : latest.toFixed(1)
  );

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(count, value, {
      duration,
      delay,
      ease: "easeOut",
      onUpdate: (latest) => setDisplayValue(latest),
    });

    return controls.stop; // cleanup
  }, [value, duration, delay, count]);

  return (
    <motion.span>
      {prefix}
      {Number.isInteger(value) ? Math.floor(displayValue) : displayValue.toFixed(1)}
      {suffix}
    </motion.span>
  );
};

const ProjectsStats = () => {
  return (
    <motion.section
      className="py-16 bg-gradient-to-r from-emerald-900 to-teal-800 dark:from-gray-800 dark:to-gray-900"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <StatBox value={42} suffix="+" label="Projects Completed" delay={0.2} />
          <StatBox value={1.2} suffix="GW" label="Renewable Capacity" delay={0.3} />
          <StatBox value={18} label="Countries Served" delay={0.4} />
          <StatBox value={500} suffix="k+" label="People Impacted" delay={0.5} />
        </div>
      </div>
    </motion.section>
  );
};

const StatBox = ({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix?: string;
  label: string;
  delay: number;
}) => (
  <motion.div
    className="text-white"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: delay + 1 }}
  >
    <div className="text-4xl md:text-5xl font-bold mb-2">
      <AnimatedCounter value={value} suffix={suffix} duration={1.5} delay={delay} />
    </div>
    <div className="text-emerald-200">{label}</div>
  </motion.div>
);

export default ProjectsStats;

import Reveal from "@/components/reveal";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-40 px-8 lg:px-16 border-t border-edge"
      aria-labelledby="about-heading"
    >
      <span
        className="absolute top-0 left-8 lg:left-16 -translate-y-1/2 font-mono text-[10px] tracking-[0.15em] text-ink-faint bg-canvas px-1"
        aria-hidden="true"
      >
        § 02
      </span>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-12 lg:gap-16 max-w-5xl">
        <Reveal>
          <div className="space-y-5 pt-1">
            <p className="font-mono text-[11px] tracking-[0.2em] text-signal uppercase">
              About
            </p>
            <div className="space-y-4 border-t border-edge-subtle pt-4">
              <div>
                <p className="font-mono text-[10px] tracking-[0.08em] text-ink font-medium">Cal Poly Pomona</p>
                <p className="font-mono text-[10px] tracking-[0.06em] text-ink-faint mt-0.5">CS — Class of 2028</p>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-[0.08em] text-ink font-medium">AVL Lab</p>
                <p className="font-mono text-[10px] tracking-[0.06em] text-ink-faint mt-0.5">Research Assistant</p>
                <p className="font-mono text-[10px] tracking-[0.06em] text-ink-faint">Jul 2025 – Present</p>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-[0.08em] text-ink font-medium">Science Olympiad</p>
                <p className="font-mono text-[10px] tracking-[0.06em] text-ink-faint mt-0.5">San Dimas HS</p>
                <p className="font-mono text-[10px] tracking-[0.06em] text-ink-faint">2022 – 2024</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-6">
            <h2
              id="about-heading"
              className="text-3xl lg:text-[2.75rem] font-bold leading-[1.15] tracking-[-0.03em] text-ink max-w-[32ch]"
            >
              I build software that closes the gap between sensor data and robot
              action.
            </h2>
            <div className="space-y-5 max-w-[65ch]">
              <p className="text-base font-light text-ink-muted leading-[1.8] tracking-[0.01em]">
                I&rsquo;m a Computer Science student at Cal Poly Pomona and a
                Research Assistant at the Autonomous Vehicle Laboratory. I build
                the perception and SLAM stack for AVL-002, the lab&rsquo;s
                autonomous go-kart platform.
              </p>
              <p className="text-base font-light text-ink-muted leading-[1.8] tracking-[0.01em]">
                My current work runs on live hardware: a custom Velodyne VLP-16
                decoder at 300k+ points per second, multi-sensor RTAB-Map fusion
                on a Jetson AGX Orin, and ROS&nbsp;2 integration across LiDAR,
                stereo cameras, and IMU.
              </p>
              <p className="text-base font-light text-ink-muted leading-[1.8] tracking-[0.01em]">
                Before university, Science Olympiad: an autonomous RC car with
                PID control and CAN bus firmware in C++ on Arduino. That
                hardware-first instinct shapes everything I build now. It has to
                work on the device, not just in simulation.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import Reveal from "@/components/reveal";

export default function About() {
  return (
    <section
      id="about"
      className="py-40 px-8 lg:px-16"
      aria-labelledby="about-heading"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 lg:gap-24 max-w-5xl">
        <Reveal>
          <p className="font-mono text-[11px] tracking-[0.2em] text-signal uppercase pt-1">
            About
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-6">
            <h2
              id="about-heading"
              className="text-2xl lg:text-3xl font-semibold leading-[1.25] tracking-[-0.02em] text-ink max-w-[38ch]"
            >
              I build software that closes the gap between sensor data and robot
              action.
            </h2>
            <div className="space-y-4 max-w-[65ch]">
              <p className="text-base font-light text-ink-muted leading-[1.8] tracking-[0.01em]">
                I&rsquo;m a Computer Science student at Cal Poly Pomona and a
                Research Assistant at the Autonomous Vehicle Laboratory, where I
                build the perception and SLAM stack for AVL-002 — the lab&rsquo;s
                autonomous go-kart platform. My current work runs on live
                hardware: a custom Velodyne VLP-16 decoder at 300k+ points per
                second, multi-sensor RTAB-Map fusion on a Jetson AGX Orin, and
                ROS&nbsp;2 integration across LiDAR, stereo cameras, and IMU.
              </p>
              <p className="text-base font-light text-ink-muted leading-[1.8] tracking-[0.01em]">
                Before university I built autonomous systems in Science Olympiad
                — an RC car with PID control and CAN bus firmware in C++ on
                Arduino. That experience with real hardware under real conditions
                shapes how I approach every system I build now: it has to work
                on the device, not just in simulation.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

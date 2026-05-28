export interface Project {
  slug: string;
  index: string;
  domain: string;
  title: string;
  tagline: string;
  description: string;
  year: string;
  role: string;
  stack: string[];
  highlights: string[];
  github: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "avl-slam",
    index: "01",
    domain: "SLAM",
    title: "AVL SLAM System",
    tagline:
      "Multi-sensor SLAM pipeline for an autonomous ground vehicle — fusing LiDAR, stereo cameras, and IMU through RTAB-Map on Jetson AGX Orin.",
    description:
      "Multi-sensor SLAM pipeline for an autonomous ground vehicle — fusing VLP-16 LiDAR, three ZED X stereo cameras, RealSense D455, and IMU through RTAB-Map on Jetson AGX Orin.",
    year: "2025 — present",
    role: "Research Assistant, Autonomous Vehicle Laboratory",
    stack: [
      "Python",
      "ROS 2 Humble",
      "RTAB-Map",
      "Jetson AGX Orin",
      "Velodyne VLP-16",
      "ZED X",
      "RealSense D455",
      "Xsens MTi-680G",
    ],
    highlights: [
      "Sensor suite: Velodyne VLP-16, three ZED X stereo cameras, RealSense D455 RGB-D, and Xsens MTi-680G IMU running on Jetson AGX Orin / JetPack 6",
      "RTAB-Map configured with LiDAR-ICP odometry, RGB-D loop closure, and IMU fusion for robust pose estimation",
      "Multicamera loop closure — all cameras contribute equally to mapping via multicam node selection logic",
      "Flexible launch modes: 3-camera, 4-camera, and single-camera configurations with localization against saved map databases",
      "Resolved 13 major integration issues across realsense-ros 3.x → 4.x API migration, IMU topic remapping, and GPU parameter serialization conflicts",
    ],
    github: "https://github.com/changwemusonda/avl_slam",
  },
  {
    slug: "velodyne-vlp16-decoder",
    index: "02",
    domain: "LiDAR Processing",
    title: "Velodyne VLP-16 Decoder",
    tagline:
      "Real-time UDP packet decoder reconstructing 3D point clouds at 300,000+ points per second — the perception foundation for the AVL autonomous go-kart.",
    description:
      "Real-time UDP packet decoder reconstructing 3D point clouds at 300,000+ points per second with Open3D visualization. Initial perception stage for the AVL autonomous go-kart.",
    year: "2025 — present",
    role: "Research Assistant, Autonomous Vehicle Laboratory",
    stack: ["Python", "velodyne_decoder", "Open3D", "NumPy", "ROS 2"],
    highlights: [
      "300,000+ points per second real-time processing at a stable 15 FPS — validated against VeloView ground truth",
      "Custom UDP packet decoder parsing raw sensor packets into structured 3D point clouds with height-based coloring",
      "Configurable range and angle filtering; supports live streaming, PCAP replay, and ROS bag playback",
      "Threaded capture/render architecture sustaining throughput across x86 and Jetson AGX Orin hardware",
      "Feeds downstream into occupancy grid mapping, RTAB-Map SLAM, and path planning on the AVL-002 platform",
    ],
    github: "https://github.com/Ryan-Simpson/velodyne-vlp16-decoder",
  },
  {
    slug: "lewitt-lidar",
    index: "03",
    domain: "Visualization",
    title: "LeWitt × LiDAR",
    tagline:
      "Four generative visualization modes that transform live Velodyne point cloud data into art through rules borrowed from Sol LeWitt's Wall Drawings.",
    description:
      "Four generative visualization modes that transform live Velodyne point cloud data into art through rules borrowed from Sol LeWitt's Wall Drawings — written for an art history final.",
    year: "2026",
    role: "Solo — TH 3010: Through Artists' Eyes, Cal Poly Pomona",
    stack: ["Python", "Open3D", "NumPy", "velodyne_decoder"],
    highlights: [
      "Grid mode (Wall Drawing #26): points snapped to discrete cells, colored by dominant direction",
      "Color Bands (Wall Drawing #821): 360° azimuth divided into 8 color sectors",
      "Line Direction (Wall Drawing #46): PCA-based surface direction analysis driving a four-color system",
      "Voxel Structure (Serial Project #1): cubic wireframe grid referencing LeWitt's modular sculptures",
      "Central argument: both Conceptual Art and autonomous perception share a core principle — a rule system that interprets and reconstructs the world",
    ],
    github: "https://github.com/Ryan-Simpson/lewitt-lidar",
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

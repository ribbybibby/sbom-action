/**
 * Used for filesystem directory input to Syft
 */
export interface SyftDirectoryInput {
  path: string;
}

/**
 * Used to point Syft to a registry to scan an image
 */
export interface SyftRegistryInput {
  registry: string;
  image: string;
}

/**
 * Used to point Syft to a local image
 */
export interface SyftImageInput {
  image: string;
}

/**
 * Syft invocation options
 */
export interface SyftOptions {
  input: SyftDirectoryInput | SyftRegistryInput | SyftImageInput;
  format: "spdx" | "spdx-json" | "cyclonedx" | "table" | "text" | "json";
  uploadToDependencySnapshotAPI: boolean;
}

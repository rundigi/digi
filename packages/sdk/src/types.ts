export interface Service {
  id: string;
  name: string;
  status: "running" | "stopped" | "deploying" | "error" | "pending";
  repoUrl?: string;
  dockerImage?: string;
  domain?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Deployment {
  id: string;
  serviceId: string;
  status: "pending" | "running" | "succeeded" | "failed" | "cancelled";
  commitSha?: string;
  commitMessage?: string;
  createdAt: string;
  finishedAt?: string;
  logs?: string;
}

export interface Domain {
  id: string;
  serviceId: string;
  hostname: string;
  verified: boolean;
  createdAt: string;
}

export interface EnvVar {
  key: string;
  value: string;
}

export interface CreateServiceInput {
  name: string;
  repoUrl?: string;
  dockerImage?: string;
  envVars?: EnvVar[];
}

export interface DigiError extends Error {
  code?: string;
}

export interface DigiClientConfig {
  apiUrl: string;
  token: string;
}

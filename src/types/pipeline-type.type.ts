import type { IPipelinePhase } from './pipeline-phase.type';

export interface IPipelineType {
  name: string;
  active: boolean;
  phases: IPipelinePhase[];
}

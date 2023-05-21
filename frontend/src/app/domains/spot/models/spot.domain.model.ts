export interface SpotDomainModel {
  readonly id: number;
  readonly latitude?: number;
  readonly longitude?: number;
  readonly address?: string;
  readonly description?: string;
  readonly photos?: string[];
  readonly comments?: string[];
  readonly rate?: number;
}

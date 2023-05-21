export interface SpotResponse {
  readonly id: number;
  readonly latitude: number;
  readonly longitude: number;
  readonly address: string;
  readonly description: string;
  readonly photos: string[];
  readonly comments: any[];
  readonly rate: number;
}

export interface Offer {
  id?: string;
  title: string;
  description: string;
  imageUrl?: string;
  active: boolean;
  startDate?: string;
  endDate?: string;
}
export type Client = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  id: number;
  type: string;
};

export type UnsecuredClientInfo = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  id: number;
  type: string;
};

export type Artist = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  statesLocation: string;
  tattooStyles: string;
  id: number;
  type: string;
};

export type UnsecuredArtistInfo = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  statesLocation: string;
  tattooStyles: string;
  id: number;
  type: string;
};

export interface Tattoo {
  artistId: number;
  title: string;
  image: string;
  dateCreated: string;
  artistName: string;
  description: string;
  price: number;
  statesInput: string;
  tattooStyleInput: string;
  id: number;
}

export interface TattooRequest {
  clientName: string;
  artistName: string;
  messageBody: string;
  approvalStatus: string;
  tattooOfInterestTitle: string;
  artistId: number;
  clientId: number;
  id: number;
}

export interface Favorite {
  clientId: number;
  tattooId: number;
  id: number;
}

export interface Info {
  message: string;
  messageType: string;
}

export interface UserSignIn {
  email: string;
  password: string;
}

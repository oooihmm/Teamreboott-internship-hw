export interface RawImageData {
  id: string;
  slug: string;
  created_at: string;
  updated_at: string;
  width: number;
  height: number;
  color: string;
  likes: number;
  user: User;
  urls: Urls;
  links: Links;
  location: Location;
  exif: Exif;
  views: number;
  downloads: number;
  description: string;
}

export interface SearchData {
  total: number;
  total_pages: number;
  results: ImageData[];
}

export interface ImageData {
  id: string;
  slug: string;
  created_at: string;
  width: number;
  height: number;
  color: string;
  likes: number;
  user: User;
  urls: Urls;
  links: Links;
  alt_description: string;
}

export interface ComparedImageData extends ImageData {
  isBookmarked: Boolean;
}

export interface User {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: string;
  portfolio_url: string;
  bio: string;
  location: string;
  links: UserLinks;
  profile_image: ProfileImage;
  total_collections: number;
  instagram_username: string;
  total_likes: number;
  total_photos: number;
}

export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

export interface Links {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface Location {
  name: string;
  city: string;
  country: string;
  position: Position;
}

export interface Exif {
  make: string;
  model: string;
  exposure_time: string;
  aperture: string;
  focal_length: string;
  iso: number;
}

export interface UserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

export interface Position {
  latitude: number;
  longitude: number;
}

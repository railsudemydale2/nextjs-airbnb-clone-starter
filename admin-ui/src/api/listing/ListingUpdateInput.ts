import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { TripUpdateManyWithoutListingsInput } from "./TripUpdateManyWithoutListingsInput";
import { WishlistUpdateManyWithoutListingsInput } from "./WishlistUpdateManyWithoutListingsInput";

export type ListingUpdateInput = {
  description?: string;
  listingCreatedBy?: UserWhereUniqueInput;
  locationData?: InputJsonValue;
  locationType?: string;
  mapdata?: InputJsonValue;
  mapData?: string;
  photos?: InputJsonValue;
  placeAmeneties?: InputJsonValue;
  placeSpace?: InputJsonValue;
  placeType?: InputJsonValue;
  price?: number;
  title?: string;
  trips?: TripUpdateManyWithoutListingsInput;
  wishlists?: WishlistUpdateManyWithoutListingsInput;
};
